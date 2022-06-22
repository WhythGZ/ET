from django.urls import path
from api.views import apiDonacion, apiDonacionDetalle, apiProducto, apiProductoDetalle

urlpatterns = [

    path('apiDonacion', apiDonacion, name='apiDonacion'),
    path('apiDonacionDetalle/<buscarId>/', apiDonacionDetalle, name='apiDonacionDetalle'),

    path('apiProducto', apiProducto, name='apiProducto'),
    path('apiProductoDetalle/<buscarId>/', apiProductoDetalle, name='apiProductoDetalle'),
]