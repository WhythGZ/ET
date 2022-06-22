$(function()
{
    $(".btnComprar").click(function()
    {
        let needed = $(".txtStock").val();
        let path = location.toString().split('/');
        if(!needed)
        {
            alert("Debe pedir almenos 1 producto.");
            $(".txtStock").focus();
            return false;
        }     
        else if(needed < 1){
            alert("El minimo de productos a pedir es de 1")
            $(".txtStock").focus();
            return false;
        }
        $.getJSON('http://127.0.0.1:8000/api/apiProductoDetalle/'+path[4]+'/', function(data) {
            let producto = data;
            stockProducto = producto.stockProducto;
            if(stockProducto < 1){
                alert("No queda stock de este producto.");
            }
            else if (stockProducto<needed){
                alert("No hay stock para la cantidad solicitada.")
            }
            else{
                let newStock = parseInt(producto.stockProducto) - parseInt(needed);
                let data = {"id":producto.id,
                            "codigoProducto":producto.codigoProducto,
                            "nombreProducto":producto.nombreProducto,
                            "descripcionProducto":producto.descripcionProducto,
                            "categoriaProducto":producto.categoriaProducto,
                            "marcaProducto":producto.marcaProducto,
                            "precioProducto":producto.precioProducto,
                            "stockProducto": newStock,
                            "precioCosto":producto.precioCosto,
                            "activo":producto.activo
                }
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/apiProductoDetalle/'+path[4]+'/',
                    method: 'PUT',
                    dataType: 'json',
                    data: JSON.stringify(data)
                }).done(function () {
                    console.log('SUCCESS');
                }).fail(function (msg) {
                    console.log('FAIL');
                });
            }
            }).fail(function() {
            console.log('Error al consumir la API!');  
        });
    });
    let numero = '1234567890';
    $(".txtStock").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numero.indexOf(caracter) < 0)
            return false;
    })
});