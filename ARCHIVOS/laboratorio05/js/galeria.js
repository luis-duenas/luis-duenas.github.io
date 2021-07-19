const abrirmodal=document.querySelectorAll("[data-open]");
const cerramodal=document.querySelectorAll("[data-close]")
const ventanamodal=document.getElementById("modal");
const parrafocabecera=document.getElementById("parrafocabecera");
const imagenmodal=document.getElementById("imagenmodal");
const parrafopie=document.getElementById("parrafopie");
var i=-1;
const isVisible = "is-visible";

for(i=o; i<abrirmodal.length;i++){
    abrirmodal[i].addEventListener("click", function(){
    var modalid=this.dataset.open;
    switch(modalid){
        case "modal1":
            ventanamodal.classList.add(isVisible);
            parrafocabecera.innerHTML="Imagen 1";
            imagenmodal.setAttribute("src","img/trabajo1.jpg");
            imagenmodal.setAttribute("alt","Imagen 1");
            parrafopie.innerHTML="Imagen 1";
            break;
            case "modal2":
                ventanamodal.classList.add(isVisible);
                parrafocabecera.innerHTML="Imagen 2";
                imagenmodal.setAttribute("src","img/trabajo2.jpg");
                imagenmodal.setAttribute("alt","Imagen 2");
                parrafopie.innerHTML="Imagen 2";
                break;
                case "modal3":
                    ventanamodal.classList.add(isVisible);
                    parrafocabecera.innerHTML="Imagen 3";
                    imagenmodal.setAttribute("src","img/trabajo3.jpg");
                    imagenmodal.setAttribute("alt","Imagen 3");
                    parrafopie.innerHTML="Imagen 3";
                    break;
                    case "modal4":
                        ventanamodal.classList.add(isVisible);
                        parrafocabecera.innerHTML="Imagen 4";
                        imagenmodal.setAttribute("src","img/trabajo4.jpg");
                        imagenmodal.setAttribute("alt","Imagen 4");
                        parrafopie.innerHTML="Imagen 4";
                        break;
                        default:
                        break;
                        }
    })
}

for(const modal of abrirmodal){
    modal.addEventlistener("click", function(){
        var modalid = this.dataset.open;
        document.getElementById(modalid).classList.add(isVisible);
    });
}

for(const modal of cerrarmodal){
    modal.addEventlistener("click", function(){
        this.parentElement.parentElement.parentElement.classList.remove
        (isVisible);
    });
}

document.addEventListener("click",(e)=>{
    if(e.target==document.querySelector(".modal .is-visible"))
    {
        document.querySelector(".modal is-visible").classList.remove(isVisible);
    }
});