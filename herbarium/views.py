from django.shortcuts import render

# Create your views here.

class PlantImageCreate(generics.CreateAPIView):
    serializer_class = serializers.PlantImageSerializer
    queryset = PlantImage.objects.all()
