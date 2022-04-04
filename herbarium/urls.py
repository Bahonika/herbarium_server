from rest_framework import routers
from .api import PlantViewSet, PlantImageViewSet
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('plant', PlantViewSet, 'plant')
router.register('plant_image', PlantImageViewSet, 'plant_image')

urlpatterns = router.urls

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
