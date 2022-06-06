from django.contrib import admin
from .models import Categoria, tipoPago

# Register your models here.

admin.site.register(tipoPago)
admin.site.register(Categoria)