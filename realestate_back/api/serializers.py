from rest_framework import serializers
from .models import Agency,property

class PropertySerializers(serializers.ModelSerializer):
    class Meta:
        model=Property
        fields='__all__'


class AgencySerializers(serializers.ModelSerializer):
    class Meta:
        model=Agency
        fields='__all__'
