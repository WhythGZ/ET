$(function() // public static void main (JAVa)
{   
    let stock = $('.txtCantidad').text();
    let id = $('.txtId').val();
    $(".btnCancel").click(function()
    {
        $.getJSON('http://127.0.0.1:8000/api/apiProductoDetalle/'+id+'/', function(data) {
            let producto = data;
            let newStock = parseInt(producto.stockProducto) + parseInt(stock);
            let data2 = {
                "id":producto.id,
                "stockProducto": newStock,
            }
            $.ajax({
                url: 'http://127.0.0.1:8000/api/apiProductoDetalle/'+id+'/',
                method: 'PUT',
                dataType: 'json',
                data: JSON.stringify(data2)
            }).done(function () {
                console.log('SUCCESS');
            }).fail(function (msg) {
                console.log('FAIL');
            });
        }).done(function () {
            console.log('SUCCESS MAIN');
        }).fail(function (msg) {
            console.log('FAIL MAIN');
        });
    });
});