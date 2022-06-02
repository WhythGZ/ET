$(function() // public static void main (JAVa)
{
    $(".btnCreate").click(function()
    {
        let code = $(".txtCode").val();
        let nombre = $(".txtNombre").val();
        if(!code){
            alert("Debe especificar el id del tipo de pago");
            $(".txtCode").focus();
        }
        else if(!nombre){
            alert("Debe especificar el nombre del tipo de pago");
            $(".txtNombre").focus();
        }
        else{
            alert("Tipo de pago registrado correctamente")
        }
    });
    let numeros = '1234567890';
    $(".txtCode").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    let letras = "qwertyuiopasdfghjklzxcvbnm- ñQWERTYUIOPASDFGHJKLZXCVBNMÑ'";
    $(".txtNombre").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;

    })
});