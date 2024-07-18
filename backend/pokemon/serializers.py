# added this 
from rest_framework import serializers
from .models import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon # the model can be found in the models.py file
        fields = ('id','api_id', 'name', 'base_experience', 'height', 'weight', 'front_url', 'back_url')