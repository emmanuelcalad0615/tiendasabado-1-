import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro= document.getElementById("botonregistro")
let modalinformativo= new bootstrap.Modal(document.getElementById('modalinformativo'))
botonregistro.addEventListener("click", function(event){
    event.preventDefault()
    let correo= document.getElementById("correo").value
    let password=document.getElementById("password").value

    const auth = getAuth();
createUserWithEmailAndPassword(auth, correo, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
    let textoinformativo = document.getElementById("infogeneral")
    let formulario= document.getElementById("formularioregistro")
    formulario.reset()
    textoinformativo.textContent="Exito al registrarte"
    modalinformativo.show()
    setTimeout(function(){
        modalinformativo.hide()
    },2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    // ..
    let textoinformativo = document.getElementById("infogeneral")
    textoinformativo.textContent="Falla"+errorMessage
    modalinformativo.show()
    
  });

})