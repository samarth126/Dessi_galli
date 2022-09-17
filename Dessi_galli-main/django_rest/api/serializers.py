from dataclasses import fields
from rest_framework import serializers
from .models import *


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model= Blogs
        fields='__all__'
        
        


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model= Menu
        fields='__all__'


class ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model= Slider
        fields='__all__'
        
        
        
class TopDishSerializer(serializers.ModelSerializer):
    class Meta:
        model=TopDishes
        fields='__all__'
        
        
class Table(serializers.ModelSerializer):
    class Meta:
        model=TableR
        fields='__all__'
    
class Contactf(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields='__all__'
    
class Events(serializers.ModelSerializer):
    class Meta:
        model=Updates
        fields='__all__'