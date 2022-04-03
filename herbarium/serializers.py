from rest_framework import serializers
from .models import Plant, PlantImage
from wsgiref.validate import validator


class PlantSerializer(serializers.ModelSerializer):
    photo = serializers.StringRelatedField()

    class Meta:
        model = Plant
        # fields = ['photo']
        fields = '__all__'


class PlantImageSerializer(serializers.ModelSerializer):
    photo = serializers.ReadOnlyField()

    class Meta:
        model = PlantImage
        fields = '__all__'
