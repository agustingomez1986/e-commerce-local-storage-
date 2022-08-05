var botonLogin = document.querySelector("#botonLogin");
botonLogin.addEventListener("click", (evento)=>{
    evento.preventDefault();
    window.location.href = "./login.html";
});