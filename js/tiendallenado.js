//Arreglo de objetos
 export function pintarTienda(){
let productosBD=[
    {nombre:"Figura Isaac Netero vs Meruem",precio:450000,foto:"../img/FiguraNEtero.jpg", descripcion:"Figura tamaño real de Isaac Netero vs Meruem Original"},
{
    nombre:"Impermedable Isaac Netero",
    precio:112000,
    foto:"/img/impermedableNetero.png",
    descripcion:"Chaqueta impermedable para hombre de Isaac Netero"
},
{
    nombre:"Pantalones cortos Isaac Netero",
    precio:50000,
    foto:"/img/PantalonesCortosNetero.png",
    descripcion:"Pantalones cortos para hombre Isaac Netero"
},
{
    nombre:"Cuadro 3D Isaac Netero",
    precio:40000, 
    foto:"/img/Cuadro3DNetero.png", 
    descripcion:"Cuadro de Isaac Netero 3D con 2 tonos de imagen"
},
{
    nombre:"Funda Isaac Netero",
    precio:30000,
    foto:"/img/FundaNetero.png",
    descripcion:"Funda para almohada estampado Isaac Netero"

},
{ 
    nombre:"Camiseta cosplay Isaac Netero", 
    precio:60000, 
    foto:"/img/CamisetaCosplayNetero.png",
    descripcion:"Camiseta para Cosplay azul con estampado de Isaac Netero"
},
{
    nombre:"Poster Isaac Netero",
    precio:40000, 
    foto:"/img/PosterNetero.png",
    descripcion:"Poster de Isaac Netero"
},
{
    nombre:"Lienzo Isaac Netero", 
    precio:35000, 
    foto:"/img/LienzoNetero.png", 
    descripcion:"Lienzo para sala de Isaac Netero"
},
{
    nombre:"Buzo Isaac Netero",
    precio:110000, 
    foto:"/img/BuzoNetero.jpg",
    descripcion:"Buzo amarillo talla única para hombre de Isaac Netero"
},
{
    nombre:"Funda para celular Isaac Netero",
    precio:40000, 
    foto:"/img/FundaIphoneNetero.png",
    descripcion:"Funda para iPhone X de Isaac Netero"
}
]
//Necesito recorrer un arreglo en JS

//1.Creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")
productosBD.forEach(function(producto){
    


    //2. pintando etiquetas

    //div con la clase col
    let columna=document.createElement("div")
    columna.classList.add("col")


    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //h4 con la clase text-center
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    let valor=document.createElement("h3")
    valor.classList.add("text-center")
    valor.classList.add("invisible")
    valor.textContent= +producto.precio

    let description=document.createElement("p")
    description.classList.add("text-center")
    description.classList.add("invisible")
    description.textContent= producto.descripcion

    

    //Creando un botón
    let boton=document.createElement("button")
    boton.setAttribute("type", "button")
    boton.classList.add("btn", "btn-warning","mx-4", "mb-5")
    boton.textContent="Ver producto"


    //3. PADRES E HIJOS
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(boton)
    tarjeta.appendChild(description)
    tarjeta.appendChild(valor)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})
}