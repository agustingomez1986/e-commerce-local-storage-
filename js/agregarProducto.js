import {serviciosLocalStorage} from "../js/servicios/serviciosLocalStorage.js";


const formAgregarProducto = document.querySelector("[data-formAgregarProducto]");

formAgregarProducto.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const bannerImage = document.getElementById('vistaPreviaImagenProducto');
    const imagenProducto = imagenBase64(bannerImage);
    
    const categoriaProducto = document.querySelector("#categoriaProducto").value;
    const nombreProducto = document.querySelector("#nombreProducto").value;
    const precioProducto = document.querySelector("#precioProducto").value;
    const descripcionProducto = document.querySelector("#descripcionProducto").value;

    serviciosLocalStorage.crearProducto(imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto)
    window.location.href = "./administrador.html"
});