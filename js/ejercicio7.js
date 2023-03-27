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
        this.nombre=nombre;
        this.telefono = telefono;
    }
    
    mostrarContacto(){
      document.write("<p>Nombre: "+this.nombre);
      document.write(". Teléfono: "+this.telefono+"</p>");
    }
}

class Agenda{
    constructor(){
        this.contactos=[];
    }
    
    aniadirContacto(contacto){
      if (this.contactos.length < 10) {
        this.contactos.push(contacto);
        document.write(`<p>${contacto.nombre} se agregó a la Agenda.</p>`);
      }else{
        document.write(`La Agenda se encuentra llena.`);
      }
    }

    existeContacto(contacto){
      for (let i = 0; i < this.contactos.length; i++) {
        if ((this.contactos[i].nombre === contacto.nombre) || (this.contactos[i].telefono === contacto.telefono)) {
          document.write("<p>El contacto ya existe.</p>");
          break;
        }else{
          document.write(`<p>No se encontró el contacto ${contacto.nombre}.</p>`);
          break;
        }
      }
    }

    listarContactos(){
      document.write("<h4>CONTACTOS:</h4>")
      document.write('<ul>');
      for(let i = 0; i < this.contactos.length; i++){
        document.write(`<li>${this.contactos[i].nombre}: ${this.contactos[i].telefono}</li>`);
      }
      document.write('</ul>');           
    }

    buscarContacto(nombre){
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === nombre) {
          document.write("<p>Teléfono de "+nombre+": "+this.contactos[i].telefono+"</p>");
        }else{
          document.write(`<p>No se encontró el contacto ${nombre}.</p>`);
        }
      }
    }

    eliminarContacto(contacto){
      for (let i = 0; i < this.contactos.length; i++) {
        if ((this.contactos[i].nombre === contacto.nombre) || (this.contactos[i].telefono === contacto.telefono)) {
          contactos.splice(i,1);
          document.write("<p>El contacto se eliminó.</p>");
          break;
        }else{
          document.write(`<p>No se encontró el contacto ${contacto.nombre}.</p>`);
          break;
        }
      }
    }
        
    agendaLlena(){
      if(this.contactos.length==10){
        document.write("La Agenda está llena.");
      }else{
        document.write("La Agenda todavía tiene espacios libres.");
      }
    }

    huecosLibres(){
      document.write("<p>Se pueden ingresar "+(10 - this.contactos.length)+" contactos más.</p>");
    }
}

const contacto1 = new Contacto("Carlos",381565656);
contacto1.mostrarContacto();
const contacto2 = new Contacto("Carlossss",381565656);
contacto2.mostrarContacto();
const contacto3 = new Contacto("Carlos",381565656);
contacto3.mostrarContacto();
const contacto4 = new Contacto("Carlos",381565656);
contacto4.mostrarContacto();
const contacto5 = new Contacto("Carlos",381565656);
contacto5.mostrarContacto();
const contacto6 = new Contacto("José",381564596);
contacto6.mostrarContacto();
const contacto7 = new Contacto("Carlos",381565656);
contacto7.mostrarContacto();
const contacto8 = new Contacto("Carlos",381565656);
contacto8.mostrarContacto();
const contacto9 = new Contacto("Carlos",381565656);
contacto9.mostrarContacto();
const contacto10 = new Contacto("Carlos",381565656);
contacto10.mostrarContacto();


const agenda = new Agenda();

agenda.aniadirContacto(contacto1);
agenda.aniadirContacto(contacto2);
agenda.aniadirContacto(contacto3);
agenda.aniadirContacto(contacto4);
agenda.aniadirContacto(contacto5);

agenda.listarContactos();

agenda.existeContacto(contacto1);

agenda.existeContacto(contacto6);

agenda.buscarContacto("Carlos");
agenda.agendaLlena();
agenda.huecosLibres();

agenda.eliminarContacto(contacto2);
agenda.listarContactos;