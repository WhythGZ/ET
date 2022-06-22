from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status

from crud.models import Categoria, Donacion, Producto
from api.serializers import CategoriaSerializer, DonacionSerializer, ProductoSerializer
# Create your views here.

@csrf_exempt
@api_view(['POST', 'GET'])
def apiDonacion(request):
    if request.method == 'GET':
        donacion = Donacion.objects.all()
        serializer = DonacionSerializer(donacion, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DonacionSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def apiDonacionDetalle(request, buscarId):
    try:
        id = int(buscarId)
        donacion = Donacion.objects.get(pk=id)

    except:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DonacionSerializer(donacion)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = DonacionSerializer(donacion, data= data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
        return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        donacion.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)   


@csrf_exempt
@api_view(['POST', 'GET'])
def apiCategoria(request):

    if request.method == 'GET':
        categoria = Categoria.objects.all()
        serializer = CategoriaSerializer(categoria, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CategoriaSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    
@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def apiCategoriaDetalle(request, buscarId):
    try:
        id = int(buscarId)
        categoria = Categoria.objects.get(pk=id)

    except:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CategoriaSerializer(categoria)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = CategoriaSerializer(categoria, data= data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
        return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        categoria.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)   

@csrf_exempt
@api_view(['POST', 'GET'])
def apiProducto(request):
    if request.method == 'GET':
        producto = Producto.objects.all()
        serializer = ProductoSerializer(producto, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductoSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    
@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def apiProductoDetalle(request, buscarId):
    try:
        id = int(buscarId)
        producto = Producto.objects.get(pk=id)

    except:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductoSerializer(producto)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ProductoSerializer(producto, data= data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)
        return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        producto.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)   