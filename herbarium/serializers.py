from rest_framework import serializers
# from .models import Plant, PlantImage
from herbarium.models import Plant


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'


# class PlantImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PlantImage
#         fields = '__all__'
