$(function() // public static void main (JAVa)
{
    $.getJSON('https://mindicador.cl/api', function(data) {
    let dailyIndicators = data;
    let res = $(".txtRes");
    res.val(dailyIndicators.dolar.valor);
}).fail(function() {
    console.log('Error al consumir la API!');
});
    copiar = $(".btnCopiar");
    copiar.select();

    $('.btnConvertir').click(function()
    {
        let clp = $('.txtCantidadCLP').val();
        let usd = $('.txtCantidadUSD').val();
        let vUsd = $(".txtRes").val();

        if (!clp){
            alert("Rellene el campo")
            $('.txtCantidadCLP').focus();
            return false;
        }
        else{
            $('.txtCantidadUSD').val((vUsd*clp)/1000000 + ' Dolarucos');
            return false;
        }
    })
    $('.btnLimpiar').click(function()
    {
        let clp = $('.txtCantidadCLP');
        let usd = $('.txtCantidadUSD');
        clp.clear();
        usd.clear();
    })
});