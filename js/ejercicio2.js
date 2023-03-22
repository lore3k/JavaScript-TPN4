/*
Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a 
mostrar la descripción del estado de la cuenta.
*/

let cuenta = {
    id: 154534,
    titular: "Alex",
    saldo: 0,

    ingresar: function(cantidad){
        document.write(`<p>Se ingresa $${cantidad} a la cuenta.</p>`);
        cuenta.saldo = cuenta.saldo + cantidad;
    },

    extraer: function(cantidad){
        document.write(`<p>Se extrajo $${cantidad} de la cuenta.</p>`);
        cuenta.saldo = cuenta.saldo - cantidad;
    },

    informar: function(){
        document.write(`<p>Monto actual en la cuenta de ${cuenta.titular}: $${cuenta.saldo}</p>`);
    }
}

cuenta.informar();
console.log(cuenta);
cuenta.ingresar(150);
cuenta.extraer(30);
cuenta.informar();