import {serviciosCRUD} from "../js/servicios/serviciosCRUD.js";

const formAgregarProducto = document.querySelector("[data-formAgregarProducto]");

formAgregarProducto.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const imagenProducto = document.querySelector("#imagenProducto").value;
    const categoriaProducto = document.querySelector("#categoriaProducto").value;
    const nombreProducto = document.querySelector("#nombreProducto").value;
    const precioProducto = document.querySelector("#precioProducto").value;
    const descripcionProducto = document.querySelector("#descripcionProducto").value;
    
    const regex = /C:\\fakepath\\/i
    const imagenProductoModificada = imagenProducto.replace(regex, './assets/img/');
    console.log(imagenProductoModificada)
    
    serviciosCRUD
        .crearProducto(imagenProductoModificada, categoriaProducto, nombreProducto, precioProducto, descripcionProducto)
        .then(()=>{
            window.location.href = "./administrador.html"
    }).catch((error) => alert("Error agregar producto"));
});