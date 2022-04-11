
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import generics

from .models import Plant
from .serializers import UserRegSerializer, PlantSerializer, UserSerializer, SubscriberSerializer


# def get_crsf(request):
#     return JsonResponse({'X-CSRFToken': get_token(request)})


# class CsrfExemptSessionAuthentication(SessionAuthentication):
#     def enforce_csrf(self, request):
#         return  # To not perform the csrf check previously happening

# class LoginView(APIView):
#     permission_classes = [permissions.AllowAny]
#     authentication_classes = (CsrfExemptSessionAuthentication,)
#
#     def post(self, request, format=None):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         if username is None or password is None:
#             return Response({'detail': 'Please provide username and password.'}, status=400)
#
#         user = authenticate(username=username, password=password)
#         if user is None:
#             return Response({'detail': 'Invalid credentials.'}, status=400)
#
#         login(request, user)
#         r = Response(UserSerializer(request.user).data)
#
#         r.set_cookie("session_id", "fsdfdsf")
#
#         return r

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        r = Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'group': str(user.groups.first()),
            'first_name': user.first_name,
            'last_name': user.last_name
        })
        print(r)
        return r


# class LogoutView(APIView):
#     permission_classes = [permissions.IsAuthenticated]
#
#     def get(self, request, format=None):
#         logout(request)
#         return Response({'detail': 'Successfully logged out.'})


# class WhoamiView(APIView):
#     permission_classes = [permissions.IsAuthenticated]
#
#     def get(self, request, format=None):
#         return Response(UserSerializer(request.user).data)


class RegisterView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserRegSerializer


class ListCreatePlantsView(generics.ListCreateAPIView):
    serializer_class = PlantSerializer
    permission_classes = [permissions.DjangoModelPermissions]

    def get_queryset(self):
        return Plant.objects.all()


class UpdatePlantView(generics.UpdateAPIView):
    serializer_class = PlantSerializer

    def get_queryset(self):
        return Plant.objects.all()
