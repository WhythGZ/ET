from django.urls import path
from api.views import apiCategoria, apiCategoriaDetalle, apiDonacion, apiDonacionDetalle

urlpatterns = [
    path('apiCategoria', apiCategoria, name='apiCategoria'),
    path('apiCategoriaDetalle/<buscarId>/', apiCategoriaDetalle, name='apiCategoriaDetalle'),
    path('apiDonacion', apiDonacion, name='apiDonacion'),
    path('apiDonacionDetalle/<buscarId>/', apiDonacionDetalle, name='apiDonacionDetalle'),

]