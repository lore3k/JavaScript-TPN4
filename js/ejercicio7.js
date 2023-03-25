/*
Agenda telefónica - Dificultad:  🟢🟡🔴

7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro 
cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, 
indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos 
indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones por consola para probar todas estas funcionalidades.

*/

class Contacto{
    constructor(nombre,telefono){
        this._nombre=nombre;
        this._telefono = telefono;
    }

    
    
    eliminarContacto(){

    }
    agendaLlena(){
        
    }
    huecosLibres(){
        
    }

}

class Agenda{
    constructor(){
        this.contactos=[];
    }
    
    aniadirContacto(Contacto){
        if (this.contactos.length < 10) {
            this.contactos.push(Contacto);
            document.write(`${Contacto} se agregó a la Agenda.`);
          } else {
            document.write(`La Agenda se encuentra llena.`);
          }
    }

    existeContacto(Conctacto){
        for (let i = 0; i < this.contactos.length; i++) {
            if ((this.contactos[i].nombre === Contacto.nombre) || (this.contactos[i].telefono === Contacto.telefono)) {
              document.write("El contacto ya existe");
            }
          }
          document.write(`No se encontró el contacto ${Contacto.nombre}.`);
        }

        listarContactos(){
            document.write('<ul>');
            for (let i = 0; i < this.contactos.length; i++){
                document.write(`<li>${this.contactos[i]}</li>`);
            }
            document.write('</ul>');           
        }

        buscarContacto(nombre){
            for (let i = 0; i < this.contactos.length; i++) {
                if (this.contactos[i].nombre === nombre) {
                  document.write(this.contactos[i].telefono);
                }
              }
              document.write(`No se encontró el contacto ${nombre}.`);
            }
}
