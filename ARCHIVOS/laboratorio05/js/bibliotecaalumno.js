//declarando variables
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtDni = document.getElementById("txtDni");
var Curso = document.getElementById("cboCurso");
var rbM = document.getElementById("rbM");
var rbT = document.getElementById("rbT");
var rbN = document.getElementById("rbN");
var chkEst = document.getElementById("chkEst");
var tbnRegistrar = document.getElementById("tbnRegistrar")
var btnRegistrar = document.getElementById("btnRegistrar")

//procedimiento mostrar
function MostrarRegistro(){
    //declarando una variable para guardar los datos
    var listaalumno=Mostrar():
    //seleccione el tbody
    tbody = document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //agragamos columnas de registro
    for(var i=0; i<listaalumno.length;i++){
        //declarando una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables de titulos
        var titulonombre = fila.insertCell(0);
        var tituloapellido = fila.insertCell(1);
        var titulodni = fila.insertCell(2);
        var titulocurso = fila.insertCell(3);
        var tituloturno = fila.insertCell(4);
        var tituloestado = fila.insertCell(5);
        //agregamos valores
        titulonombre.innerHTML = listaalumno[i].nombre;
        tituloapellido.innerHTML = listaalumno[i].apellido;
        titulodni.innerHTML = listaalumno[i].dni;
        titulocurso.innerHTML = listaalumno[i].curso;
        tituloturno.innerHTML = listaalumno[i].turno;
        tituloestado.innerHTML = listaalumno[i].estado;

    }
}