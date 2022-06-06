from django.shortcuts import render

from .models import Categoria, tipoPago, tipoUsuario, Producto

# Create your views here.

def viewTipoPago(request):
    cntx = {}
    if request.method == 'POST':
        id = int("0" + request.POST["txtId"])
        nombreTipoPago = request.POST["txtNombre"]
        activo = False
        if 'chkActivo' in request.POST:
            activo = True
        if 'btnCreate' in request.POST:
            if len(nombreTipoPago) < 5:
                cntx = {'error': 'El nombre del tipo de pago debe tener como minimo 5 caracteres'}
            elif id < 1:
                tipoPago.objects.create(nombreTipoPago = nombreTipoPago, activo = activo)
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
            else:
                fila = tipoPago.objects.get(pk = id)
                fila.nombreTipoPago = nombreTipoPago
                fila.activo = activo
                fila.save()
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
        elif 'btnRead' in request.POST:
            listado = tipoPago.objects.all()
            if len(listado) >= 1:
                cntx = {'listado': listado }
            else:
                cntx = {'error': 'Aun no existen Tipos de Pagos para mostrar'}
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

def viewCategoria(request):
    cntx = {}
    if request.method == 'POST':
        id = int("0" + request.POST["txtId"])
        nombreCategoria = request.POST["txtNombre"]
        activo = False
        if 'chkActivo' in request.POST:
            activo = True
        if 'btnCreate' in request.POST:
            if len(nombreCategoria) < 5:
                cntx = {'error': 'El nombre de la categoria debe tener como minimo 5 caracteres'}
            elif id < 1:
                Categoria.objects.create(nombreCategoria = nombreCategoria, activo = activo)
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
            else:
                fila = Categoria.objects.get(pk = id)
                fila.nombreCategoria = nombreCategoria
                fila.activo = activo
                fila.save()
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
        elif 'btnRead' in request.POST:
            listado = Categoria.objects.all()
            if len(listado) >= 1:
                cntx = {'listado': listado }
            else:
                cntx = {'error': 'Aun no existen Categorias para mostrar'}
        elif 'btnDelete' in request.POST:
            try:
                fila = Categoria.objects.get(pk = id)
                fila.delete()
                cntx = {'mensaje': 'Los datos fueron eliminados correctamente'}
            except:
                cntx = {'error': 'Debe seleccionar item a eliminar'}

    return render(request, 'categoria.html', cntx)
  
def viewReadCategoria(request, id):
    cntx = {}
    try:
        fila = Categoria.objects.get(pk = id)
        cntx = {'fila': fila}
    except:
        cntx = {'error': 'Item no encontrado'}

    return render(request, 'categoria.html', cntx)


def viewTipoUsuario(request):
    cntx = {}
    if request.method == 'POST':
        id = int("0" + request.POST["txtId"])
        nombreTipoUsuario = request.POST["txtNombre"]
        activo = False
        if 'chkActivo' in request.POST:
            activo = True
        if 'btnCreate' in request.POST:
            if len(nombreTipoUsuario) < 5:
                cntx = {'error': 'El nombre del tipo de usuario debe tener como minimo 5 caracteres'}
            elif id < 1:
                tipoUsuario.objects.create(nombreTipoUsuario = nombreTipoUsuario, activo = activo)
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
            else:
                fila = tipoUsuario.objects.get(pk = id)
                fila.nombreTipoUsuario = nombreTipoUsuario
                fila.activo = activo
                fila.save()
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
        elif 'btnRead' in request.POST:
            listado = tipoUsuario.objects.all()
            if len(listado) >= 1:
                cntx = {'listado': listado }
            else:
                cntx = {'error': 'Aun no existen tipos de usuarios para mostrar'}
        elif 'btnDelete' in request.POST:
            try:
                fila = tipoUsuario.objects.get(pk = id)
                fila.delete()
                cntx = {'mensaje': 'Los datos fueron eliminados correctamente'}
            except:
                cntx = {'error': 'Debe seleccionar item a eliminar'}

    return render(request, 'tipoUsuario.html', cntx)
  
def viewReadTipoUsuario(request, id):
    cntx = {}
    try:
        fila = tipoUsuario.objects.get(pk = id)
        cntx = {'fila': fila}
    except:
        cntx = {'error': 'Item no encontrado'}

    return render(request, 'tipoUsuario.html', cntx)


def viewProducto(request):
    cntx = {}
    productCategories = Categoria.objects.all()
    cntx = {'productCategories' : productCategories}
    if request.method == 'POST':
        id = int("0" + request.POST["txtId"])
        codigoProducto = request.POST["txtCode"]
        nombreProducto = request.POST["txtNombre"]
        categoriaProducto = request.POST["ctProducto"]
        precioProducto = request.POST["txtPrecio"]
        stockProducto = request.POST["txtStock"]
        precioCosto = request.POST["txtCosto"]
        activo = False
        if 'chkActivo' in request.POST:
            activo = True
        if 'btnCreate' in request.POST:
            if len(nombreProducto) < 5:
                cntx = {'error': 'El nombre del producto debe tener como minimo 5 caracteres'}
            elif id < 1:
                Producto.objects.create(codigoProducto = codigoProducto, nombreProducto = nombreProducto, categoriaProducto = categoriaProducto, precioProducto = precioProducto, stockProducto = stockProducto, precioCosto = precioCosto, activo = activo)
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
            else:
                fila = Producto.objects.get(pk = id)
                fila.codigoProducto = codigoProducto
                fila.nombreProducto = nombreProducto
                fila.categoriaProducto = categoriaProducto
                fila.precioProducto = precioProducto
                fila.stockProducto = stockProducto
                fila.precioCosto = precioCosto
                fila.activo = activo
                fila.save()
                cntx = {'mensaje': 'Los datos fueron guardados correctamente'}
        elif 'btnRead' in request.POST:
            listado = Producto.objects.all()
            if len(listado) >= 1:
                cntx = {'listado': listado }
            else:
                cntx = {'error': 'Aun no existen productos para mostrar'}
        elif 'btnDelete' in request.POST:
            try:
                fila = Producto.objects.get(pk = id)
                fila.delete()
                cntx = {'mensaje': 'Los datos fueron eliminados correctamente'}
            except:
                cntx = {'error': 'Debe seleccionar item a eliminar'}

    return render(request, 'producto.html', cntx)
  
def viewReadProducto(request, id):
    cntx = {}
    try:
        fila = Producto.objects.get(pk = id)
        cntx = {'fila': fila}
    except:
        cntx = {'error': 'Item no encontrado'}

    return render(request, 'producto.html', cntx)

