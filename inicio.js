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
        else if(Email.length<13){
            alert("El correo debe tener como minimo 8 caracteres")
            $(".txtEmail").focus();
        }
        else if(Email.indexOf('@', 0) == -1 || Email.indexOf('.', 0) == -1) {
            alert('El correo electrónico introducido no es correcto.');
            return false;
        }      
        else if(!Password)
        {
            alert("Debe especificar la contraseña");
            $(".txtPassword").focus();
        }
        else if(Password.length<8)
        {
            alert("La contraseña debe tener como minimo 8 caracteres")
            $(".txtPassword").focus();
        }  
        else{
            alert("Iniciando sesion...");
        }
    });
    let correo = 'qwertyuiopasdfghjklzxcvbnmñQWERTYUIOPASDFGHJKLZXCVBNMÑ@.1234567890_-';
    $(".txtEmail").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(correo.indexOf(caracter) < 0)
            return false;
    })
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