//selecciona todos los button con una id que comience (^=) con "btn" y se asignan en btnColor, si bien un NodeList NO es un array, servira para asignar los eventos mas adelante con mayor facilidad.
const btnColor= document.querySelectorAll('button[id^="btn-"]');
//busca el div con el id 'caja' y se asigna en caja
const caja = document.getElementById('caja');    
//se le agrega el addEventListener a cada elemento dentro del NodeList siendo estos todos los botones del 1 al 6 por medio de un ciclo for y al activarse el evento le entrega le entrega el background color del boton a la caja
for (let i = 0; i < btnColor.length; i++) {
    btnColor[i].addEventListener('click', function() {
        caja.style.backgroundColor = this.style.backgroundColor;
    });
}
