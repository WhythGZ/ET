$(function() // public static void main (JAVa)
{
    $(".btnCreate").click(function()
    {
        let code = $(".txtCode").val();
        let nombre = $(".txtNombre").val();
        let precio = $(".txtPrecio").val();
        let stock = $(".txtStock").val();
        if(!code){
            alert("Debe especificar el codigo del producto");
            $(".txtCode").focus();
        }
        else if(!nombre){
            alert("Debe especificar el nombre del producto");
            $(".txtNombre").focus();
        }
        else if(!precio){
            alert("Debe especificar el precio del producto");
            $(".txtPrecio").focus();
        }
        else if(!stock){
            alert("Debe especificar el stock del producto");
            $(".txtStock").focus();
        }
        else{
            alert("Producto registrado correctamente")
        }
    });
    $(".btnRead").click(function()
    {
        let code = $(".txtCode").val();
        if(!code){
            alert("Debe especificar el codigo del producto");
            $(".txtCode").focus();
        }
        else{
            alert("Imprimiendo producto")
        }
    });
    $(".btnUpdate").click(function()
    {
        let code = $(".txtCode").val();
        let nombre = $(".txtNombre").val();
        let precio = $(".txtPrecio").val();
        let stock = $(".txtStock").val();
        if(!code){
            alert("Debe especificar el codigo del producto");
            $(".txtCode").focus();
        }
        else if(!nombre){
            alert("Debe especificar el nuevo nombre del producto");
            $(".txtNombre").focus();
        }
        else if(!precio){
            alert("Debe especificar el nuevo precio del producto");
            $(".txtPrecio").focus();
        }
        else if(!stock){
            alert("Debe especificar el nuevo stock del producto");
            $(".txtStock").focus();
        }
        else{
            alert("Producto se actualizo correctamente")
        }
    });
    $(".btnDelete").click(function()
    {
        let code = $(".txtCode").val();
        if(!code){
            alert("Debe especificar el codigo del producto");
            $(".txtCode").focus();
        }
        else{
            alert("Producto eliminado correctamente")
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