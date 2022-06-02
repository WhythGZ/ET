$(function() // public static void main (JAVa)
{
    $(".btnCreate").click(function()
    {
        let code = $(".txtCode").val();
        let nombre = $(".txtNombre").val();
        if(!code){
            alert("Debe especificar el id de categoria");
            $(".txtCode").focus();
        }
        else if(!nombre){
            alert("Debe especificar el nombre de la categoria");
            $(".txtNombre").focus();
        }
        else{
            alert("Categoria registrada correctamente")
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