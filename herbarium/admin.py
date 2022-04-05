from django.contrib import admin
from herbarium.models import Plant, PlantImage

admin.site.register(Plant)
admin.site.register(PlantImage)

# class PlantAdmin(admin.ModelAdmin):
#     list_display = '__all__'
#     list_display_links = ('name', 'latin')
#     search_fields = ('name', 'latin')
