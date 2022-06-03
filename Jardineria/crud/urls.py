from django.urls import path
from . import views
urlpatterns = [
    path('tipoPago', views.viewTipoPago, name = "tipoPago"),
    path('tipoPago/<int:id>/', views.viewReadTipoPago, name="tipoPago"),
    ]