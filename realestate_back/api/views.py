from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Agency,Property
from .serializers import AgencySerializers,PropertySerializers


class AgencyList(generics.ListCreateAPIView):
    queryset=Agency.objects.all()
    serializer_class=AgencySerializers


class AgencyDetail(generics.RetrieveAPIView):
    queryset=Agency.objects.all()
    serializer_class=AgencySerializers

class AgencyProperties(generics.ListAPIView):
    serializer_class=PropertySerializers

    def get_queryset(self):
        agency_id=self.kwargs['pk']
        return Property.objects.filter(agency_id=agency_id)


class PropertyList(generics.ListCreateAPIView):
    queryset=Property.objects.all()
    serializer_class=PropertySerializers


class PropertyDetail(generics.RetrieveAPIView):
    queryset=Property.objects.all()
    serializer_class=PropertySerializers

@api_view(['GET'])
def top_ten_properties(request):
    properties=Property.objects.order_by('-price')[:10]
    serializer=PropertySerializers(properties,many=True)
    return Response(serializer.data)