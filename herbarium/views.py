from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics
from rest_framework.renderers import JSONRenderer

from django_filters.rest_framework import DjangoFilterBackend
from .models import Plant, Comment
from .serializers import UserRegSerializer, PlantSerializer, CommentSerializer


class CustomAuthToken(ObtainAuthToken):
    permission_classes = [permissions.AllowAny]

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


class RegisterView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserRegSerializer

class ListCreateCommentView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.DjangoModelPermissions]
    filter_backends = [DjangoFilterBackend]
    filter_fields = ["plant"]
    renderer_classes = [JSONRenderer]

    def get_queryset(self):
        return Comment.objects.all()


class ListCreatePlantsView(generics.ListCreateAPIView):
    serializer_class = PlantSerializer
    permission_classes = [permissions.DjangoModelPermissions]

    def get_queryset(self):
        return Plant.objects.all()


class UpdatePlantView(generics.UpdateAPIView):
    serializer_class = PlantSerializer

    def get_queryset(self):
        return Plant.objects.all()
