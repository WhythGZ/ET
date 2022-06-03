from django.shortcuts import render

from .models import tipoPago

# Create your views here.

def viewTipoPago(request):
    cntx = {}
    if request.method == 'POST':
        id = int("0" + request.POST["txtId"])
        idTipoPago = request.POST["txtCode"]
        nombreTipoPago = request.POST["txtNombre"]
        activo = False
        if 'chkActivo' in request.POST:
            activo = True
        if 'btnCreate' in request.POST:
            if id < 1:
                tipoPago.objects.create(idTipoPago = idTipoPago, nombreTipoPago = nombreTipoPago, activo = activo)
            else:
                fila = tipoPago.objects.get(pk = id)
                fila.idTipoPago = idTipoPago
                fila.nombreTipoPago = nombreTipoPago
                fila.activo = activo
                fila.save()
            cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
        elif 'btnRead' in request.POST:
            listado = tipoPago.objects.all()
            cntx = {'listado': listado }
        elif 'btnDelete' in request.POST:
            try:
                fila = tipoPago.objects.get(pk = id)
                fila.delete()
                cntx = {'mensaje': 'Los datos fueron eliminados correctamente'}
            except:
                cntx = {'error': 'Debe seleccionar item a eliminar'}


    return render(request, 'tipoPago.html', cntx)
    

def viewReadTipoPago(request, id):
    cntx = {}
    try:
        fila = tipoPago.objects.get(pk = id)
        cntx = {'fila': fila}
    except:
        cntx = {'error': 'Item no encontrado'}

    return render(request, 'tipoPago.html', cntx)

# def viewProduct(request):
#     contexto = {}
#     if request.method == 'POST':
#         # capturar datos del form
#         id = int("0" + request.POST["txtId"])
#         codigoProducto = request.POST["txtCode"]
#         nombreProducto = request.POST["txtNombre"]
#         precioProducto = request.POST["txtPrecio"]
#         stockProducto = request.POST["txtStock"]
#         # detectar que botón fue presionado
#         if 'btnCreate' in request.POST:
#             if id < 1: # ORM Object relational Mapping
#                 Producto.objects.create(codigoProducto = codigoProducto, nombreProducto = nombreProducto, precioProducto = precioProducto, stockProducto = stockProducto ) 
#             else:
#                 item = Producto.objects.get(pk = id)
#                 item.codigoProducto = codigoProducto
#                 item.nombreProducto = nombreProducto
#                 item.precioProducto = precioProducto
#                 item.stockProducto = stockProducto
#                 item.save()     
#             contexto = {'mensaje': 'Los datos fueron guardados'}

        
#         elif 'btnListar' in request.POST:
#             listado = Producto.objects.all()
#             contexto = {'listado': listado }

#     return render(request, 'formProducto.html', contexto)

