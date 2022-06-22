from django.urls import path
from api.views import apiCategoria, apiCategoriaDetalle, apiDonacion, apiDonacionDetalle, apiProducto, apiProductoDetalle

urlpatterns = [
    path('apiCategoria', apiCategoria, name='apiCategoria'),
    path('apiCategoriaDetalle/<buscarId>/', apiCategoriaDetalle, name='apiCategoriaDetalle'),

    path('apiDonacion', apiDonacion, name='apiDonacion'),
    path('apiDonacionDetalle/<buscarId>/', apiDonacionDetalle, name='apiDonacionDetalle'),

    path('apiProducto', apiProducto, name='apiProducto'),
    path('apiProductoDetalle/<buscarId>/', apiProductoDetalle, name='apiProductoDetalle'),
]