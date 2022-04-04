from django.contrib import admin
# from .models import Plant, PlantImage


# admin.site.register(PlantImage)
from herbarium.models import Plant

admin.site.register(Plant)

# class PlantAdmin(admin.ModelAdmin):
#     list_display = '__all__'
#     list_display_links = ('name', 'latin')
#     search_fields = ('name', 'latin')
