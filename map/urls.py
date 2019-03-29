from django.urls import path, include

from map import views
from map.views import index
from django.views.generic import TemplateView
urlpatterns = [
    path('', TemplateView.as_view(template_name='frontend/index.html')),
    path('api/', include('map.api.urls')),
]
