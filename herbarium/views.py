from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from herbarium.models import PlantImage


class PlantImageCreate(generics.CreateAPIView):
    serializer_class = serializers.PlantImageSerializer
    queryset = PlantImage.objects.all()
