"""herbariumapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from .utils import serve
import os

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('api/', include('herbarium.urls'))
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FLUTTER_WEB_APP = os.path.join(BASE_DIR, 'web')


def flutter_redirect(request, resource):
    return serve(request, resource, FLUTTER_WEB_APP)


urlpatterns += [
    path('', lambda r: flutter_redirect(r, 'index.html')),
    path('<path:resource>', flutter_redirect),
]

urlpatterns = [
    path('herbarium/', include(urlpatterns))
]
