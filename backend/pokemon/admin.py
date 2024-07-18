from django.contrib import admin
from .models import Pokemon # import the Pokemon model class

class PokemonAdmin(admin.ModelAdmin):
    list_display = ('api_id', 'name', 'base_experience', 'height', 'weight', 'front_url', 'back_url')

# Register your models here.
admin.site.register(Pokemon, PokemonAdmin)