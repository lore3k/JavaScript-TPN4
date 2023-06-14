/*
Agenda telefónica - Dificultad:  🟢🟡🔴

7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro 
cuando sus nombres son iguales.

Crea un menú con opciones que serán seleccionadas por el usuario usando un
prompt, las salidas de las operaciones seleccionadas por el usuario se pueden
mostrar en pantalla y por consola.
*/

class Contacto{
  #nombre;
  #telefono;
  constructor(nombre,telefono){
      this.#nombre= nombre;
      this.#telefono = telefono;
  }
  
  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }
  get telefono() {
    return this.#telefono;
  }

  set telefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
}

//Una agenda de contactos está formada por un conjunto de contactos. 
//Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
class Agenda{
  constructor(){
    this.contactos=[];
  }
    
/* aniadirContacto(Contacto): Añade un contacto a la agenda, 
  si la agenda no puede almacenar más contactos indicar por pantalla. */
aniadirContacto(contacto){
  if(!this.existeContacto(contacto.nombre)){
    if(this.contactos.length < 10) {
      this.contactos.push(contacto);
      alert(`El contacto ${contacto.nombre} se agregó a la agenda.`);
    }else{
      alert(`La Agenda se encuentra llena.`);
      }
  }else{
    alert(`El contacto ya existe.`);
  }
  
}

//existeContacto(Conctacto): indica si el contacto pasado existe o no.
existeContacto(nombreBuscado){
  for(let i=0; i<this.contactos.length; i++){
    if(this.contactos[i].nombre==nombreBuscado){
      return true;
    }else{
      return false;
    }
  } 
}

//listarContactos(): Lista toda la agenda
listarContactos(){
  document.write(`<h2>Agenda de contactos</h2>`);
  document.write("<ul>");
  this.contactos.map((contacto)=>
    document.write(`<li>Contacto: ${contacto.nombre} - Tel: ${contacto.telefono}</li>`));
    document.write("</ul>");          
  }

//buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
buscarContacto(nombreBuscado){
  for(let i=0; i<this.contactos.length; i++){
    if(this.contactos[i].nombre==nombreBuscado){
      alert("Número de Teléfono: "+this.contactos[i].telefono);
    }else{
      alert('No existe el contacto');
    }
  } 
}

//eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
eliminarContacto(nombre){
  let contactosFiltrados = this.contactos.filter((contacto)=> contacto.nombre !== nombre);
  if(contactosFiltrados.length === this.contactos.length){
    alert(`No encontramos el contacto ${nombre}`)
  }else{
    alert(`Contacto eliminado: ${nombre}`)
    this.contactos = contactosFiltrados
  }
}
        
//agendaLlena(): indica si la agenda está llena.
agendaLlena(){
  if(this.contactos.length==10){
    alert("La Agenda está llena.");
    return true;
  }else{
    alert("La Agenda todavía tiene espacios libres.");
    return false;
  }
}

//huecosLibres(): indica cuántos contactos más podemos ingresar.
  huecosLibres(){
    alert("Se pueden ingresar "+(10 - this.contactos.length)+" contactos más.");
  }
}

let agendaNueva = new Agenda(10);

do {
  const opcion = parseInt(
    prompt(`Seleccione una opción:
    1- Añadir contacto 
    2- Ver si existe un contacto en la agenda 
    3- Mostrar todos los contactos 
    4- Buscar un contacto por su nombre 
    5- Eliminar un contacto 
    6- Ver si la agenda está llena 
    7- Espacio disponible para almacenar contactos`)
  );
  console.log(opcion);
if(!isNaN(opcion)){
  switch (opcion) {
    case 1:
      const nombrePersona = prompt("Ingrese un nombre");
      const telefonoPersona = prompt("Ingrese un teléfono");
      const contactoNuevo = new Contacto(nombrePersona, telefonoPersona);
      agendaNueva.aniadirContacto(contactoNuevo);

      break;
    case 2:
      const nombre = prompt("Ingrese el nombre buscado");
      agendaNueva.existeContacto(nombre)
      ? alert('Existe el contacto')
      : alert('No existe el contacto');
      break;
    case 3:
      agendaNueva.listarContactos();
      break;
    case 4:
      const nombreBuscado = prompt("Ingrese el nombre a buscar");
      agendaNueva.buscarContacto(nombreBuscado);
      break;
    case 5:
      const nombreParaBorrar = prompt("Ingrese el nombre para borrar");
      agendaNueva.eliminarContacto(nombreParaBorrar)
      break;
    case 6:
      agendaNueva.agendaLlena()
      break;
    case 7:
      agendaNueva.huecosLibres();
      break;
    default:
      alert("Opción invalida");
  }

}
} while (confirm("¿Desea realizar otra operación?"));