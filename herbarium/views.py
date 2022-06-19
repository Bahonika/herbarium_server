from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics
from rest_framework.renderers import JSONRenderer

from . import serializers

from django_filters.rest_framework import DjangoFilterBackend
from .models import Plant, Comment, PlantImage, Family
from .serializers import UserRegSerializer, PlantSerializer, PlantCreateSerializer, CommentSerializer, \
    PlantImageSerializer, FamilySerializer


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


class FamilyList(generics.ListCreateAPIView):
    permission_classes = [permissions.DjangoModelPermissions]
    serializer_class = FamilySerializer
    queryset = Family.objects.all()

    # def get_queryset(self):
    #     queryset = Family.objects.all()
    #     family_p = self.request.query_params.get('family_name')
    #     if family_p is not None:
    #         queryset = queryset.filter(family__istartswith=family_p)
    #     return queryset


class FamilyDetail(generics.RetrieveAPIView):
    serializer_class = FamilySerializer
    queryset = Family.objects.all()


class PlantList(generics.ListCreateAPIView):
    serializer_class = PlantSerializer
    permission_classes = [permissions.DjangoModelPermissions]

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PlantSerializer
        else:
            return PlantCreateSerializer

    def get_queryset(self):
        return Plant.objects.all()


class PlantImageCreate(generics.CreateAPIView):
    permission_classes = [permissions.DjangoModelPermissions]
    serializer_class = PlantImageSerializer
    queryset = PlantImage.objects.all()


class UpdatePlantView(generics.UpdateAPIView):
    serializer_class = PlantSerializer

    def get_queryset(self):
        return Plant.objects.all()
