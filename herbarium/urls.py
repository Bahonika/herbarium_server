from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.urls import path

urlpatterns = [
    path('register', views.RegisterView.as_view()),
    path('login', views.CustomAuthToken.as_view()),
    path('plant', views.ListCreatePlantsView.as_view()),
    path('plant/<pk>', views.UpdatePlantView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
