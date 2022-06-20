from django.db import models

# Create your models here.

class Donacion(models.Model):
    donacion = models.IntegerField()
    nombreDonante = models.TextField(max_length=20)
    tipoPago = models.IntegerField()

class Usuario(models.Model):
    rut = models.TextField(max_length=10)
    dv = models.TextField(max_length=1)
    nombre = models.TextField(max_length=20)
    apellido = models.TextField(max_length=20)
    fechaNac = models.DateField()
    password = models.TextField()
    email = models.TextField(max_length=30)
    direccion = models.TextField(max_length=30)
    telefono = models.TextField(max_length=12)
    tipoDeUsuario = models.IntegerField()

    def __str__(self):
        return self.rut
    
class Producto(models.Model):
    codigoProducto = models.IntegerField()
    nombreProducto = models.TextField(max_length=100)
    descripcionProducto = models.TextField()
    categoriaProducto = models.IntegerField()
    marcaProducto = models.IntegerField()
    precioProducto = models.IntegerField()
    stockProducto = models.IntegerField()
    precioCosto = models.IntegerField()
    activo = models.BooleanField()

    def __str__(self):
        return self.codigoProducto

class Categoria(models.Model):
    nombreCategoria = models.TextField(max_length=100)
    activo = models.BooleanField()

    def __str__(self):
        return self.nombreCategoria

class tipoPago(models.Model):
    nombreTipoPago = models.TextField()
    activo = models.BooleanField()

    def __str__(self):
        return self.nombreTipoPago

class tipoUsuario(models.Model):
    nombreTipoUsuario = models.TextField()
    activo = models.BooleanField()

    def __str__(self):
        return self.nombreTipoUsuario

class Marca(models.Model):
    nombreMarca = models.TextField(max_length=50)
    activo = models.BooleanField()

    def __str__(self):
        return self.nombreMarca