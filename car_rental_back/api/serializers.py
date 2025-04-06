from rest_framework import serializers
from .models import Car,CarCategory
class CarCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=CarCategory
        fields=['id','name']


class CarSerializer(serializers.ModelSerializer):
    category=CarCategorySerializer()


    class Meta:
        model = Car
        fields=['id','brand','model','price_per_day','available_units']