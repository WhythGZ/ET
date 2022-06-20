from rest_framework import serializers
from crud.models import Categoria, Donacion

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Categoria
        fields  = ['id','nombreCategoria', 'activo']

class DonacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donacion
        fields = ['id', 'donacion', 'nombreDonante', 'tipoPago']
