from django.urls import path
from map.api.views import MapListView, MapDetailView

urlpatterns = [
    path('', MapListView.as_view()),
    path('<pk>', MapDetailView.as_view()),
]
