//Importandomodulos
import { pintarTienda} from './tiendallenado.js'
import {ampliarInfo} from './ampliarInfo.js'



//Crear un objeto vacío 
let producto={}

//Llamado al modulo de pintar
pintarTienda()

//Llamando al modulo ampliarInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click", function(event){

    if(event.target.classList.contains("btn")){
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    producto = ampliarInfo(event)
    modalinfoproducto.show()
    let botonadd= document.getElementById("botonAdd")
    botonadd.addEventListener('click', function(event){
        if(event.target.classList.contains("btn")){
            modalinfoproducto.hide()
        }
    })

    }
})
//Detectar la acción de añadir al carrito

//Carrito es un arreglo de productos(arreglo de objetos )
let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click', function(evento){

     
     
     
     

 //1.Capturar la cantidad del producto
     let cantidad= document.getElementById("cantidadProducto").value

 //2.Agregar la cantidad al objeto producto
     producto.cantidad=cantidad
     
 //Agregar el producto al carrit
     carrito.push(producto)   

 //4.Calculo la sumatoria de cantidades
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
        

    })
    let capsula= document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")
    

    

})

//4.Ver resumen de la venta
let botonCarrito= document.getElementById('botoncarrito')
botonCarrito.addEventListener("click", function(event){
    let contenedor= document.getElementById("contenedorventa")
    let modalVenta = new bootstrap.Modal(document.getElementById('resumencarrito'))
    //Borrar el contenido html de una sección
    contenedor.innerHTML=""
    //Recorrer el carrito para pintar los productos en la factura
    carrito.forEach(function(producto){
        //Traversing
        let fila = document.createElement("div")
        fila.classList.add("row")
        let columna1= document.createElement("div")
        columna1.classList.add("col-12", "col-md-4")
        let columna2= document.createElement("div")
        columna2.classList.add("col-12","col-md-8")
        let foto= document.createElement("img")
        foto.classList.add("img-fluid", "w-100")
        foto.src= producto.foto      
        let nombre = document.createElement("h4")
        nombre.classList.add("text-center")
        nombre.textContent= producto.nombre
        let descripcion = document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent= producto.descripcion
        let precio = document.createElement("h5")
        precio.textContent="Precio: COP$ " +producto.precio
        
        let cantidad = document.createElement("h5")
        cantidad.textContent= "Cantidad: " +producto.cantidad
        let linea= document.createElement("hr")
        let linea2= document.createElement("hr")
        let linea3= document.createElement("hr")

        let subtotal= document.createElement("h4")
        let subtotalcompra=producto.cantidad*producto.precio
        subtotal.textContent="Subtotal= COP$ "+subtotalcompra
        producto.subtotal= subtotalcompra
        
        //Padres e hijos
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(descripcion)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(linea)
        columna2.appendChild(subtotal)
        columna2.appendChild(linea2)  
        fila.appendChild(linea3)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)      
        
    })
    
    let suma=0
        carrito.forEach(function(producto){
            suma= suma+Number(producto.subtotal)
            

        })
      let total= document.getElementById("total")
      total.textContent= "Total= COP$ " +suma  
      let convertir=document.getElementById("us")
      convertir.addEventListener("click", function(event){
        if(event.target.classList.contains("btn")){
            
            const dolar=3852.01
            let USD= suma/dolar
            let convert=document.getElementById("US")
            let condecimal= USD.toFixed(3)
            convert.textContent= "USD$ "+condecimal
        
            
        }
        
      })
      function limpiarCarrito(){
        let limpiar= document.getElementById("limpiar")
          limpiar.addEventListener("click", function(event){
            if(event.target.classList.contains("btn")){
              carrito=[]
              contenedor.innerHTML=""
              suma=0
              total.textContent="Total= COP$ "+suma
              let capsula= document.getElementById("capsula")
              capsula.classList.add("invisible")
              let convert=document.getElementById("US")
              convert.textContent=""
    
              
            }
          })
    }
    limpiarCarrito()
      let comprar=document.getElementById("comprar")
      comprar.addEventListener("click", function(event){
        if(event.target.classList.contains("btn")){
        let modalcompra=new bootstrap.Modal(document.getElementById('modalcompra'))
        modalcompra.show()
        carrito=[]
        contenedor.innerHTML=""
        suma=0
        total.textContent="Total= COP$ "+suma
        let capsula= document.getElementById("capsula")
        capsula.classList.add("invisible")
        let convert=document.getElementById("US")
        convert.textContent=""
     
      
    }
   
})
      modalVenta.show()
      comprar.addEventListener("click", function(event){

        if(event.target.classList.contains("btn")){
            modalVenta.hide()
        }
    
      })
      
      

     
    
    
    
   


   

    
})


