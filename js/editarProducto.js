import { serviciosLocalStorage } from "./servicios/serviciosLocalStorage.js";

const formulario = document.querySelector("[data-formEditarProducto]");

const obtenerInformcion = async()=>{
   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   
   if(id == null){
      alert("Error de ID");
   }

   const imagen = document.querySelector("#imagenProducto");
   const bannerImage = document.getElementById('vistaPreviaImagenProducto');
   const categoria = document.querySelector("#categoriaProducto");
   const nombre = document.querySelector("#nombreProducto");
   const precio = document.querySelector("#precioProducto");
   const descripcion = document.querySelector("#descripcionProducto");

   try{
      const item = await serviciosLocalStorage.datoProducto(id);
      
      if(item.imagenProducto && item.categoriaProducto && item.nombreProducto && item.precioProducto && item.descripcionProducto){
         
         const myFile = new File(["Hello"], item.imagenProducto, {
            type: 'text/plain',
            lastModified: new Date(),
         });

         const dataTransfer = new DataTransfer();
         dataTransfer.items.add(myFile);
         imagen.files = dataTransfer.files;
         
         bannerImage.src = "data:image/png;base64,"+item.imagenProducto;
         categoria.value = item.categoriaProducto;
         nombre.value = item.nombreProducto;
         precio.value = item.precioProducto;
         descripcion.value = item.descripcionProducto;
         
      }else{
         throw new Error("Error de try");
      }
   }catch(error){
      alert("Error de catch")
   }
};

obtenerInformcion();

formulario.addEventListener("submit", (evento)=>{
   evento.preventDefault();
   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   const categoria = document.querySelector("#categoriaProducto").value;
   const nombre = document.querySelector("#nombreProducto").value;
   const precio = document.querySelector("#precioProducto").value;
   const descripcion = document.querySelector("#descripcionProducto").value;

   const bannerImage = document.getElementById('vistaPreviaImagenProducto');
   const imagen = imagenBase64(bannerImage);

   serviciosLocalStorage.actualizarProducto(imagen, categoria, nombre, precio, descripcion, id)
   window.location.href = "./administrador.html";
});