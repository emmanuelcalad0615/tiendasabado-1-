
export  function convertirdolares(){
  let suma=0
        carrito.forEach(function(producto){
            suma= suma+Number(producto.subtotal)
            

        })
      let total= document.getElementById("total")
      total.textContent= "Total= COP$ " +suma  
      let convertirdolares=document.getElementById("us")
      convertirdolares.addEventListener("click", function(event){
        if(event.target.classList.contains("btn")){
            
            const dolar=3852.01
            let USD= suma/dolar
            let convert=document.getElementById("US")
            let condecimal= USD.toFixed(3)
            convert.textContent= "USD$ "+condecimal
        
            
        }
        
      })
}
export function limpiarCarrito(){
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
export function comprar(){
  let comprar=document.getElementById("comprar")
  comprar.addEventListener("click", function(event){
    if(event.target.classList.contains("btn")){
    let modalcompra=new bootstrap.Modal(document.getElementById('modalcompra'))
    modalcompra.show()
    limpiarCarrito()
 
  
}

})
}