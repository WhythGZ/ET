$(function()
{
    $(".btnCreate").click(function()
    {
        let code = $(".txtCode").val();
        let nombre = $(".txtNombre").val();
        let precio = $(".txtPrecio").val();
        let stock = $(".txtStock").val();
        let categoria = $('.ctProducto').val();
        let costo = $('.txtCosto').val();
        if(!code){
            alert("Debe especificar el codigo del producto");
            $(".txtCode").focus();
        }
        else if(!nombre){
            alert("Debe especificar el nombre del producto");
            $(".txtNombre").focus();
        }
        else if (categoria == 0){
            alert("Debe especificar la categoria del producto")
            $(".ctProducto").focus();
        }
        else if(!precio){
            alert("Debe especificar el precio del producto");
            $(".txtPrecio").focus();
        }
        else if(precio<500){
            alert("El precio minimo debe ser de 500 pesos");
            $(".txtPrecio").focus();
        }
        else if(!stock){
            alert("Debe especificar el stock del producto");
            $(".txtStock").focus();
        }
        else if(stock<0){
            alert("El numero de stock debe ser mayor que 0");
            $(".txtStock").focus();
            return false;
        }
        else if(!costo){
            alert("Debe especificar el costo del producto");
            $(".txtCosto").focus();
        }
        else if(costo<500){
            alert("El precio minimo del costo deber ser de 500 pesos");
            $(".txtCosto").focus();
        }
        else{
            alert("Producto registrado correctamente")
        }
    });
    let numeros = '1234567890';
    $(".txtCode").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    let letras = "qwertyuiopasdfghjklzxcvbnmñQWERTYUIOPASDFGHJKLZXCVBNMÑ1234567890'";
    $(".txtNombre").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;

    })
    $(".txtPrecio").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;

    })
    $(".txtStock").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;

    })
});