/*
Rectángulos
Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar y 
mostrar sus propiedades, calcular el perímetro y el área

*/

class Rectangulo{
    constructor(alto,ancho){
        this._alto = alto;
        this._ancho = ancho;
    }

    get alto(){
        return this._alto;
    }
    get ancho(){
        return this._ancho;
    }

    set alto(nuevoAlto){
        this._alto=nuevoAlto;
    }
    set ancho(nuevoAncho){
        this._ancho=nuevoAncho;
    }

    mostrar(){
        document.write("Alto: "+this.alto+`<br>`);
        document.write("Ancho: "+this.ancho+`<br>`);
    }

    perimetro(){
        let per = 2*(this.alto+this.ancho);
        document.write("El perimetro es: "+per);
    }

    area(){
        let ar = this.alto*this.ancho;
        document.write("El área es: "+ar);
    }
}

const rectangulo1 = new Rectangulo(3,3);
const rectangulo2 = new Rectangulo(4,5);

document.write("<h5>Rectángulo 1</h5>");
rectangulo1.mostrar();
document.write("<h5>Rectángulo 2</h5>");
rectangulo2.mostrar();

document.write("<h5>Rectángulo 1</h5>");
rectangulo1.perimetro();
document.write("<h5>Rectángulo 2</h5>");
rectangulo2.area();
