/*
Producto - Dificultad:  🟢🟡
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar 
las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de 
los tres objetos instanciados.

*/ 

class Producto{
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }

    mostrar(){
        document.write("Código: "+this.codigo+`<br>`);
        document.write("Nombre: "+this.nombre+`<br>`);
        document.write("Precio: "+this.precio+`<br>`);
    }
}

const producto1 = new Producto(12235,"Notebook",150000);
const producto2 = new Producto(12236,"Celular",50000);
const producto3 = new Producto(12237,"Ipad",95000);

document.write("<h5>Producto 1</h5>");
producto1.mostrar();
document.write("<h5>Producto 2</h5>");
producto2.mostrar();
document.write("<h5>Producto 3</h5>");
producto3.mostrar();