from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.urls import path

urlpatterns = [
    path('register', views.RegisterView.as_view()),
    path('login', views.CustomAuthToken.as_view()),
    path('plant', views.PlantList.as_view()),
    path('comment', views.ListCreateCommentView.as_view()),
    path('plant/<pk>', views.UpdatePlantView.as_view()),
    path('family', views.FamilyList.as_view()),
    path('family/<pk>', views.FamilyDetail.as_view()),
    path('plant_image', views.PlantImageCreate.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
