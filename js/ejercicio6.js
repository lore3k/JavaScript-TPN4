/*
Libros - Dificultad:  🟢🟡🔴
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con 
el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Persona{
    constructor(isbn,titulo,autor,numPaginas){
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.numPaginas=numPaginas;
    }

    mostrarLibro(){
        document.write(
        "El libro "+this.titulo+
        " con ISBN "+this.isbn+
        " creado por el autor "+this.autor+
        " tiene páginas "+this.numPaginas);
    }
    
}