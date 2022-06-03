from django.db import models

# Create your models here.

# class Usuario(models.Model):
#     rut = models.TextField(max_length=10)
#     dv = models.TextField(max_length=1)
#     nombre = models.TextField(max_length=20)
#     apellido = models.TextField(max_length=20)
#     fechaNac = models.DateField()
#     password = models.TextField()
#     email = models.TextField(max_length=30)
#     direccion = models.TextField(max_length=30)
#     telefono = models.TextField(max_length=12)
#     admin = models.BooleanField()

#     def __str__(self):
#         return self.rut
    
# class Producto(models.Model):
#     codigoProducto = models.IntegerField()
#     nombreProducto = models.TextField(max_length=100)
#     categoriaProducto = models.IntegerField()
#     precioProducto = models.IntegerField()
#     stockProducto = models.IntegerField()
#     precioCosto = models.IntegerField()
#     activo = models.BooleanField()

#     def __str__(self):
#         return self.codigoProducto

# class Categoria(models.Model):
#     idCategoria = models.IntegerField()
#     nombreCategoria = models.TextField(max_length=100)

#     def __str__(self):
#         return self.nombreCategoria

class tipoPago(models.Model):
    idTipoPago = models.IntegerField()
    nombreTipoPago = models.TextField()
    activo = models.BooleanField()

    def __str__(self):
        return self.nombreTipoPago

# class tipoUsuario(models.Model):
#     idTipoUsuario = models.IntegerField()
#     nombreTipoUsuario = models.TextField()

#     def __str__(self):
#         return self.nombreTipoUsuario
