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

class Libro{
    constructor(isbn,titulo,autor,numPaginas){
        this._isbn=isbn;
        this._titulo=titulo;
        this._autor=autor;
        this._numPaginas=numPaginas;
    }

    get isbn(){
        return this._isbn;
    }
    get titulo(){
        return this._titulo;
    }
    get autor(){
        return this._autor;
    }
    get numPaginas(){
        return this._numPaginas;
    }

    set isbn(nuevoISBN){
        this._isbn=nuevoISBN;
    }
    set titulo(nuevoTitulo){
        this._titulo=nuevoTitulo;
    }
    set autor(nuevoAutor){
        this._autor=nuevoAutor;
    }
    set numPaginas(nuevoNumPaginas){
        this._numPaginas=nuevoNumPaginas;
    }

    mostrarLibro(){
        document.write(
        "El libro "+this.titulo+
        ", con ISBN: "+this.isbn+
        ", creado por el autor "+this.autor+
        ", tiene"+this.numPaginas+" páginas.<br><br>");
    }    
}

const libro1 = new Libro(0345426274,"El Psicoanalista","John Katzenbach",512);
const libro2 = new Libro(034554474,"El Alquimista","Paulo Coelho",192);

libro1.mostrarLibro();
libro2.mostrarLibro();


if(libro1.numPaginas>libro2.numPaginas){
    document.write("El libro "+libro1.titulo+" tiene más páginas que el "+libro2.titulo);
}else{
    if(libro1.numPaginas<libro2.numPaginas){
        document.write("El libro "+libro2.titulo+" tiene más páginas que el "+libro1.titulo);
    }else{
        document.write("Ambos libros tienen la misma cantidad de páginas.");
    }
}