export const botonAgregarProducto = ()=>{
    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.innerHTML = "Agregar producto";
    boton.addEventListener("click", (evento)=>{
        evento.preventDefault();
        window.location.href = "agregarProducto.html";
    });
    return boton;
}