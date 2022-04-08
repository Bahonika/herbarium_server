from django.http import JsonResponse
from rest_framework import permissions
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate, login, logout
from .models import Plant

from .serializers import UserRegSerializer, PlantSerializer, UserSerializer


def get_crsf(request):
    return JsonResponse({'X-CSRFToken': get_token(request)})


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        username = request.data.get('username')
        password = request.data.get('password')
        if username is None or password is None:
            return Response({'detail': 'Please provide username and password.'}, status=400)

        user = authenticate(username=username, password=password)
        if user is None:
            return Response({'detail': 'Invalid credentials.'}, status=400)

        login(request, user)
        return Response(UserSerializer(request.user).data)


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        logout(request)
        return Response({'detail': 'Successfully logged out.'})


class WhoamiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        return Response(UserSerializer(request.user).data)


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


# class CreatePlantView(generics.CreateAPIView):
#     serializer_class = PlantSerializer
#     permission_classes = [permissions.DjangoObjectPermissions]
#
#     def get_queryset(self):
#         return Plant.objects.all()
