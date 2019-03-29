from rest_framework.generics import ListAPIView, RetrieveAPIView

from map.api.serializers import MapSerializer
from map.models import Map


class MapListView(ListAPIView):
    queryset = Map.objects.all()
    serializer_class = MapSerializer

class MapDetailView(RetrieveAPIView):
    queryset = Map.objects.all()
    serializer_class = MapSerializer
