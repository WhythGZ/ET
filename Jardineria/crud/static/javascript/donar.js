$(function() // public static void main (JAVa)
{
    $(".btnEnviar").click(function()
    {
        let Donacion = $(".txtDonacion").val();
        let Direccion = $(".cmbDonacion").val();
        let Pago = $(".cmbMPago").val();

        if(!Donacion)
        {
            alert("Debe especificar el monto");
            $(".txtDonacion").focus();
            return false;
        }     
        else if(Donacion.length<4){
            alert("El minimo de donacion son: $1.000CLP")
            $(".cmbMPago").focus();
            return false;
        }    
        else if(Direccion == 0)
        {
            alert("Debe especificar la Direccion");
            $(".cmbDonacion").focus();
            return false;
        }
        else if(Pago == 0)
        {
            alert("Debe especificar el medio de pago")
            $(".cmbMPago").focus();
            return false;
        }  
        else{
            alert("Donacion enviada correctamente");
        }
    });
    let numero = '1234567890';
    $(".txtDonacion").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numero.indexOf(caracter) < 0)
            return false;
    })
    let letras = "qwertyuiopasdfghjklzxcvbnmñQWERTYUIOPASDFGHJKLZXCVBNMÑ' ";
    $(".txtNombre").keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
});