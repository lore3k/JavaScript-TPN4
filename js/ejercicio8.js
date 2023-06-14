/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse". */


class Persona {
    #nombre;
    #anios;
    #profesion;
    constructor(nombre,edad,profesion){
        this.#nombre=nombre;
        this.#anios=edad;
        this.#profesion=profesion;
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

    get profesion(){
        return this.#profesion;
    }
    set profesion(nuevaProfesion){
        this.#profesion=nuevaProfesion;
    }

    saludar(){
        document.write(this.#nombre + " dice HOLA");
    }
    despedir(){
        document.write(this.#nombre + " dice ADIÓS");
    }
}

const persona1 = new Persona("Juan",35,"Actor");
const persona2 = new Persona("Carla",18,"Estudiante");


persona1.saludar();
persona2.despedir();