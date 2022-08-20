import { inicializacionLocalStorage } from "./inicializacionLocalStorage.js";

const listaProductos = ()=> {
    var listaProductosAlmacenada = JSON.parse(localStorage.getItem("tasks")) || [];
    if (listaProductosAlmacenada.length == 0){
        inicializacionLocalStorage();
        listaProductosAlmacenada = JSON.parse(localStorage.getItem("tasks"));
    }

    return listaProductosAlmacenada;
};

const crearProducto = (imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto) =>{
    const producto = {
        imagenProducto,
        categoriaProducto,
        nombreProducto,
        precioProducto,
        descripcionProducto,
        id: uuid.v4()
    };
    const listaProductosAlmacenada = JSON.parse(localStorage.getItem("tasks")) || [];
    listaProductosAlmacenada.push(producto);
    localStorage.setItem("tasks", JSON.stringify(listaProductosAlmacenada));
};

const eliminarProducto = (id)=>{
    const listaActual = document.querySelector("[data-listaProductos]");
    const listaProductosAlmacenada = JSON.parse(localStorage.getItem("tasks"));
    const index = listaProductosAlmacenada.findIndex((producto) => producto.id == id);
    listaProductosAlmacenada.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(listaProductosAlmacenada));
}

const datoProducto = (id)=>{
    const listaProductosAlmacenada = JSON.parse(localStorage.getItem("tasks"));
    const index = listaProductosAlmacenada.findIndex((producto) => producto.id == id);
    return listaProductosAlmacenada[index];
}

const actualizarProducto = (imagenProducto, categoria, nombreProducto, precioProducto, descripcionProducto, id)=>{
    const listaProductosAlmacenada = JSON.parse(localStorage.getItem("tasks"));
    const index = listaProductosAlmacenada.findIndex((producto) => producto.id == id);

    listaProductosAlmacenada[index].imagenProducto = imagenProducto;
    listaProductosAlmacenada[index].categoriaProducto = categoria;
    listaProductosAlmacenada[index].nombreProducto = nombreProducto;
    listaProductosAlmacenada[index].precioProducto = precioProducto;
    listaProductosAlmacenada[index].descripcionProducto = descripcionProducto;

    localStorage.setItem("tasks", JSON.stringify(listaProductosAlmacenada));    
}

export const serviciosLocalStorage = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    datoProducto,
    actualizarProducto,
}