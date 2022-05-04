$(function() // public static void main (JAVa)
{
    $(".btnEnviar").click(function()
    {
        let nombre = $(".txtNombre").val();
        let apellido = $(".txtApellido").val();
        let rut = $(".txtRut").val();
        let dv = $(".txtDV").val();
        let password1 = $(".txtPassword").val();
        let password2 = $(".txtPassword2").val();
        let email = $(".txtEmail").val();
        let direccion = $(".txtDireccion").val();
        let telefono = $(".txtTel").val();


        if(!rut)
        {
            alert("Debe especificar el Rut");
            $(".txtRut").focus();
        }           
        else if(!dv)
        {
            alert("Debe especificar el Digito verificador");
            $(".txtDV").focus();
        }    
        else if(!nombre)
        {
            alert("Debe especificar el Nombre");
            $(".txtNombre").focus();
        }
        else if(!apellido)
        {
            alert("Debe especificar el Apellido");
            $(".txtApellido").focus();
        }
        else if(!password1)
        {
            alert("Debe especificar la contraseña");
            $(".txtPassword").focus();
        }    
        else if(!password2)
        {
            alert("Debe confirmar la contraseña");
            $(".txtPassword2").focus();
        }    
        else if(!email){
            alert("Debe especificar el correo");
            $(".txtEmail").focus();
        }
        else if(!direccion){
            alert("Debe especificar la direccion");
            $(".txtDireccion").focus();
        }
        else if(!telefono){
            alert("Debe especificar el telefono");
            $(".txtTelefono").focus();
        }
        else if(password1!=password2){
            alert("Las contraseñas deben coincidir");
            return false;
        }
        else {
            alert("Registrado correctamente");
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
    let rut = '1234567890';
    $(".txtRut").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(rut.indexOf(caracter) < 0)
            return false;

    })
    let dv = '0123456789kK';
    $(".txtDV").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(dv.indexOf(caracter) < 0)
            return false;
    })
    let tel = '0123456789+';
    $(".txtTel").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(tel.indexOf(caracter) < 0)
            return false;
    })

});