export const categoriaUnica = (datos) => {
   const unica = [];

   datos.forEach((dato) => {
       if(!unica.includes(dato.categoriaProducto)) unica.push(dato.categoriaProducto);
   });
   return unica;
};