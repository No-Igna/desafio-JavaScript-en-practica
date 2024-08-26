document.getElementById('btn-sumar').addEventListener('click', function(){
    let valor1=document.getElementById('valor1').value;
    valor1=parseInt(valor1) || 0;
    let valor2=document.getElementById('valor2').value;
    valor2=parseInt(valor2) || 0;
    let suma = valor1+valor2;
    document.querySelector('.resultado').textContent = suma;
})

document.getElementById('btn-restar').addEventListener('click', function(){
    let valor1=document.getElementById('valor1').value;
    valor1=parseInt(valor1) || 0;
    let valor2=document.getElementById('valor2').value;
    valor2=parseInt(valor2) || 0;
    let resta = valor1-valor2;
    if(resta<0){
        resta=0;
    }
    document.querySelector('.resultado').textContent = resta;
})
