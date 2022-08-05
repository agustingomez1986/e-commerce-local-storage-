var inputs = document.querySelectorAll("input");
var textareas = document.querySelectorAll("textarea");

function validaInputs(input){
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){       //validity state es un objeto que nos trae ciertas características
                                    // y es quien nos dice si es válido, o si el valor está faltando
        input.parentElement.classList.remove("formulario__box--incorrecto");
        input.parentElement.querySelector(".input__error").innerHTML = "";
    }else{
        input.parentElement.classList.add("formulario__box--incorrecto");
        input.parentElement.querySelector(".input__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

function validaTextareas(input){
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){       //validity state es un objeto que nos trae ciertas características
                                    // y es quien nos dice si es válido, o si el valor está faltando
        input.parentElement.classList.remove("textarea__box--incorrecto");
        input.parentElement.querySelector(".textarea__error").innerHTML = "";
    }else{
        input.parentElement.classList.add("textarea__box--incorrecto");
        input.parentElement.querySelector(".textarea__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

inputs.forEach(input=>{
    input.addEventListener("blur", (input)=>{
        validaInputs(input.target);
    });
});

textareas.forEach(input=>{
    input.addEventListener("blur", (input)=>{
        validaTextareas(input.target);
    });
});

const tipoDeErrores = [
    "valueMissing",
//  "typeMismatch",
    "patternMismatch",
//  "customError",
]

const mensajesDeError = {
    nombreContacto: {
        valueMissing: "El nombre no puede estar vacío",
        patternMismatch: "El nombre solo puede contener letras",
    },
    mensajeContacto: {
        valueMissing: "Debe escribir algún mensaje",
    },
    email: {
        valueMissing: "El e-mail no puede estar vacío",
        patternMismatch: "El correo debe tener el formato texto@texto.com",
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
    },
    imagenProducto: {
        valueMissing: "Debe seleccionar una imagen",
    },
    categoriaProducto: {
        valueMissing: "La categoría no puede estar vacía",
        patternMismatch: "La categoría no cumple con el patrón de letras y/o números",
    },
    nombreProducto: {
        valueMissing: "El nombre no puede estar vacío",
        patternMismatch: "El nombre no cumple con el patrón de letras y/o números",
    },
    precioProducto: {
        valueMissing: "El precio no puede estar vacío",
        patternMismatch: "El precio debe tener formato numérico separados los centavos con un punto",
    },
    descripcionProducto: {
        valueMissing: "La descripción no puede estar vacía",
    },
}

function mostrarMensajeDeError (tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach((error)=>{
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}