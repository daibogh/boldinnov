from rest_framework import serializers

from map.models import Map


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = ('id', 'title', 'description', 'img')
