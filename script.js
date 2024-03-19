const nombre = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("parrafo");

let warningsd="";
parrafo.innerHTML="";

form.addEventListener("submit", e=> {
    e.preventDefault();
    warningsd="";
    let error=false;
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length<4){
        warningsd=`El nombre tiene que tener 4 caractéres como mínimo <br>`;
        error=true;
    }
    if(!(regex.test(email.value))){
        warningsd+=`El formato del email es incorrecto. <br>`;
        error=true;
    }
    if(message.value.length==0){
        warningsd+=`El mensaje está vacío <br>`;
        error=true;
    }else if (message.value.length>10){
        warningsd+=`El mensaje debe tener como maximo 10 caracteres <br>`;
        error=true;
    }

    if(error){
        parrafo.innerHTML=warningsd;
    }else{
        parrafo.innerHTML="Enviado";
    }
   
});
