from rest_framework import serializers
from crud.models import Categoria, Donacion, Producto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Categoria
        fields  = ['id','nombreCategoria', 'activo']

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Producto
        fields  = ['id',
        'codigoProducto', 
        'nombreProducto',
        'descripcionProducto',
        'categoriaProducto',
        'marcaProducto',
        'precioProducto',
        'stockProducto',
        'precioCosto',
        'activo',
        ]

class DonacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donacion
        fields = ['id', 'donacion', 'nombreDonante', 'tipoPago']
