/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
de un avión y devolverá información en caso de encontrarlo, si no lo encontró
indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
de pasajeros. Los aviones tienen el método abordar el cual permite que un
pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto,
buscar un avión y usar el método abordar */


class Avion{
    #nombre;
    #capacidad;
    #destino;
    constructor(nombre,capacidad,destino){
        this.#nombre=nombre;
        this.#capacidad=capacidad;
        this.#destino=destino;
        pasajeros=[];
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre=nuevoNombre;
    }

    get capacidad(){
        return this.#capacidad;        
    }
    set capacidad(nuevaCapacidad){
        if(this.nuevaCapacidad>0){
            return this.nuevaCapacidad;
        }else{
            console.log(`${nuevaCapacidad} no es válida`);
        }
    }

    get destino(){
        return this.#destino;
    }
    set destino(nuevoDestino){
        this.#destino=nuevoDestino;
    }

    abordar(pasajero){
        if (this.pasajeros.length < this.capacidad) {
          this.pasajeros.push(pasajero);
          console.log(`${pasajero} abordó el avión ${this.nombre} con destino a ${this.destino}.`);
        } else {
          console.log(`El avión ${this.nombre} ya está lleno.`);
        }
      }
}

class Aeropuerto{
    #nombreAero;
    constructor(nombreAero){
        this.#nombreAero=nombreAero;
        this.aviones=[];
    }

    get nombreAero(){
        return this.#nombreAero;
    }
    set nombreAero(nuevoNombreAero){
        this.#nombreAero=nuevoNombreAero;
    }

    agregarAvion(avion){
        if(!this.buscarAvion(avion.nombre)){
            this.aviones.push(avion);
            alert(`El avión ${avion.nombre} se agregó al aeropuerto.`);
        }else{
            alert(`El Avión ya existe.`);
        }
    }

    buscarAvion(avion){
        for(let i=0; i<this.aviones.length; i++){
          if(this.aviones[i].nombre==avion.nombre){
            document.write("Avión existente: "+this.aviones[i]);
          }else{
            document.write('No existe el Avión buscado.');
          }
        } 
    }
}


const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
const avion1 = new Avion("Avión 1", 100, "Londres");
const avion2 = new Avion("Avión 2", 200, "Nueva York");
  
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);

const avionEncontrado = aeropuertoInternacional.buscarAvion("Avión 2");
avionEncontrado.abordar;