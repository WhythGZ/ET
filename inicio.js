$(function() // public static void main (JAVa)
{
    $(".btnEnviar").click(function()
    {
        let Email = $(".txtEmail").val();
        let Password = $(".txtPassword").val();

        if(!Email)
        {
            alert("Debe especificar el correo");
            $(".txtEmail").focus();
        }           
        else if(!Password)
        {
            alert("Debe especificar la contraseña");
            $(".txtPassword").focus();
        }
        else {
            alert("Iniciando sesion");
        }
    });
    let letras = 'qwertyuiopasdfghjklzxcvbnmñQWERTYUIOPASDFGHJKLZXCVBNMÑ';
    $(".txtNombre").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;

    })
    $(".txtApellido").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;

    })
});