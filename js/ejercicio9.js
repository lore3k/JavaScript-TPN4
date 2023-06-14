/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado */

class Animal {
    #nombre;
    #anios;
    constructor(nombre,anios){
        this.#nombre=nombre;
        this.#anios=anios;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre=nuevoNombre;
    }

    get edad(){
        return this.#anios;
    }
    set edad(nuevaEdad){
        if(edad>0){
            this.#anios=nuevaEdad;
        }else{
            document.write("Ingrese un número válido");
        }
    }

    emitirSonido(){
        document.write(`${this.#nombre} hace `);
    }
}

class Perro extends Animal{
    constructor(nombre,anios){
        super(nombre,anios);
    }

    emitirSonido(){
        super.emitirSonido();
        document.write("Guau<br>");
    }
}

class Gato extends Animal{
    constructor(nombre,anios){
        super(nombre,anios);
    }

    emitirSonido(){
        super.emitirSonido();
        document.write("Miau<br>");
    }
}

const perro = new Perro("Teo",5);
perro.emitirSonido();

const gato = new Gato("Mini",1);
gato.emitirSonido();