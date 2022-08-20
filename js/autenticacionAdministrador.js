const administrador = "admin@alura.com";
const password = "q1w2e3r4";

var botonIniciarSesion = document.querySelector("#botonIniciarSesion");

botonIniciarSesion.addEventListener("click", (evento)=>{
    evento.preventDefault();
    var emailIngresado = document.querySelector("#emailIngresado").value;
    var passwordIngresado = document.querySelector("#passwordIngresado").value;

    if(administrador == emailIngresado && password == passwordIngresado){
        window.location.href = "./administrador.html";
    } else {
        alert("Usuario o password incorrectos. E-mail: admin@alura.com  Constraseña: q1w2e3r4");
    }
});