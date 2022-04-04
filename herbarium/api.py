from rest_framework import viewsets, permissions
# from .models import PlantImage, Plant
# from .serializers import PlantSerializer, PlantImageSerializer
from herbarium.models import Plant
from herbarium.serializers import PlantSerializer


class PlantViewSet(viewsets.ModelViewSet):
    queryset = Plant.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PlantSerializer


# class PlantImageViewSet(viewsets.ModelViewSet):
#     queryset = PlantImage.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = PlantImageSerializer

