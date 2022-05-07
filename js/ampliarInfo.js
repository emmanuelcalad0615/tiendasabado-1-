export function ampliarInfo(event){
let producto={}
if(event.target.classList.contains("btn")){
    
   producto={
       foto:event.target.parentElement.querySelector("img").src,
       nombre:event.target.parentElement.querySelector("h4").textContent,
       descripcion: event.target.parentElement.querySelector("p").textContent,
       precio: event.target.parentElement.querySelector("h3").textContent

      
 }
   let foto=document.getElementById("fotoinfo")
   foto.src=producto.foto
   let nombre=document.getElementById("nombreinfo")
   nombre.textContent=producto.nombre
   let descripcion= document.getElementById("descripcion")
   descripcion.textContent=producto.descripcion
   let precio= document.getElementById("valor")
   precio.textContent=producto.precio 
   
   
   
   
}
return producto
}