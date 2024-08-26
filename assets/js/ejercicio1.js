document.getElementById("formulario").addEventListener("submit",function(event){
    event.preventDefault();
    //reinicia el texto en las etiquetas con las respectivas clases
    document.querySelector(".errorNombre").textContent="";
    document.querySelector(".errorAsunto").textContent="";
    document.querySelector(".errorMensaje").textContent="";
    document.querySelector(".resultado").textContent="";
    
    //consigue el valor de los inputs con las respectivas ids;
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    
    //con este regex se valida el uso de letras minusculas y mayusculas, espacios, eñes, vocales con tildes y la dieresis en la u 
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/
    
    //esta variable se usara para comprobar si el formulario fue llenado correctamente
    let valid=true;
    
    //el primer if comprueba si la variable esta vacia, siendo este el caso avisara que se requiere un nombre. y le asignara "false" a la variable valid.
    if(!nombre){
        document.querySelector(".errorNombre").textContent="el nombre es requerido.";
        valid=false;
    }else if(!regex.test(nombre)){
        document.querySelector(".errorNombre").textContent="el nombre debe contener solo puede contener letras y espacios.";
        valid=false;
    }

    if(!asunto){
        document.querySelector(".errorAsunto").textContent="el asunto es requerido.";
        valid=false;
    }else if(!regex.test(asunto)){
        document.querySelector(".errorAsunto").textContent="el asunto debe contener solo puede contener letras y espacios.";
        valid=false;
    }

    if(!mensaje){
        document.querySelector(".errorMensaje").textContent="el mensaje es requerido.";
        valid=false;
    }else if(!regex.test(mensaje)){
        document.querySelector(".errorMensaje").textContent="el mensaje debe contener solo puede contener letras y espacios.";
        valid=false;
    }

    //si se cumplen todas las validaciones anteriores, valid llegara con el valor "true" y podra mostrar que el mensaje fue enviado con éxito
    if (valid) {
        document.querySelector(".resultado").textContent= "mensaje enviado con éxito."
    }
});