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
            alert("Debe especificar la contraseña");
            $(".txtPassword2").focus();
        }    
        else if(password1!=password2){
            alert("Las contraseñas deben coincidir");
            return false;
        }
        else {
            alert("Registrado correctamente");
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