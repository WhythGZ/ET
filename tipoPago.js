$(function()
{
    $(".btnCreate").click(function()
    {
        let code = $(".txtCode").val();
        let nombre = $(".txtNombre").val();
        if(!nombre){
            alert("Debe especificar el nombre del tipo de pago");
            $(".txtNombre").focus();
        }
        else{
            alert("Tipo de pago registrado correctamente")
        }
    });
    let letras = "qwertyuiopasdfghjklzxcvbnm- ñQWERTYUIOPASDFGHJKLZXCVBNMÑ'";
    $(".txtNombre").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;

    })
});