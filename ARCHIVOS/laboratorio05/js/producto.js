//cramos un vector para el producto
var producto= [];
//creamos un procedimiento para registrar
//categoria se va a registrar de un Combox --> select
//categoria: Entretenimiento, Tecnologia, Linea Blanca
function Registrar(nombreproducto, preproducto, catproducto, canproducto){
    var NuevoProducto={
        nombre: nombreproducto,
        precio: preproducto,
        categoria: catproducto,
        cantidad: canproducto
    };
    registro.push(NuevoProducto);
}
//creamos una funcion para obtener los valores del registro
function Mostrar(){
    return producto;
}