from django.contrib import admin
from herbarium.models import Plant, Comment, PlantImage, Family

admin.site.register(Plant)
admin.site.register(Comment)
admin.site.register(Family)
admin.site.register(PlantImage)
