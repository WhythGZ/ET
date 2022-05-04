$(function()
{

$('.btnUSD').click(function(){
    alert("Pasando valores a Dolares");
    let p1 = $('.precio1').text();
    let p2 = $('.precio2').text();
    let p3 = $('.precio3').text();
    let p4 = $('.precio4').text();
    let p5 = $('.precio5').text();
    let p6 = $('.precio6').text();
    let p7 = $('.precio7').text();
    let p8 = $('.precio8').text();
    let p9 = $('.precio9').text();
    p1 = p1.replace('$', '');
    p1 = p1.replace('.', '');
    p2 = p2.replace('$', '');
    p2 = p2.replace('.', '');
    p3 = p3.replace('$', '');
    p3 = p3.replace('.', '');
    p4 = p4.replace('$', '');
    p4 = p4.replace('.', '');
    p5 = p5.replace('$', '');
    p5 = p5.replace('.', '');
    p6 = p6.replace('$', '');
    p6 = p6.replace('.', '');
    p7 = p7.replace('$', '');
    p7 = p7.replace('.', '');
    p8 = p8.replace('$', '');
    p8 = p8.replace('.', '');
    p9 = p9.replace('$', '');
    p9 = p9.replace('.', '');
    $.getJSON('https://mindicador.cl/api', function(data) {
        let dailyIndicators = data;
        let vUSD = (dailyIndicators.dolar.valor);
        $('.precio1').text('$'+(parseInt(p1)*vUSD/1000000).toFixed(2));
        $('.precio2').text('$'+(parseInt(p2)*vUSD/1000000).toFixed(2));
        $('.precio3').text('$'+(parseInt(p3)*vUSD/1000000).toFixed(2));
        $('.precio4').text('$'+(parseInt(p4)*vUSD/1000000).toFixed(2));
        $('.precio5').text('$'+(parseInt(p5)*vUSD/1000000).toFixed(2));
        $('.precio6').text('$'+(parseInt(p6)*vUSD/1000000).toFixed(2));
        $('.precio7').text('$'+(parseInt(p7)*vUSD/1000000).toFixed(2));
        $('.precio8').text('$'+(parseInt(p8)*vUSD/1000000).toFixed(2));
        $('.precio9').text('$'+(parseInt(p9)*vUSD/1000000).toFixed(2));
        }).fail(function() {
        console.log('Error al consumir la API!');  
    });

})

$('.btnCLP').click(function(){
    alert("pasando valores a Pesos Chilenos")
    location.reload();
})



//  cmboPeso = $('.cmbPeso').val();
//  if(cmboPeso == 0){
//     //  alert("CLP")
//  }
//  else if(cmboPeso == 1){
//     //  alert("USD")
//  }
});