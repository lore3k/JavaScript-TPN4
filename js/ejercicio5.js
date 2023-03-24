/*
Generaciones - Dificultad:  🟢🟡🔴

5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que 
la persona es mayor de edad.

mostrarDatos: devuelve toda la información del objeto.

generaDNI(): genera un número aleatorio de 8 cifras.

 */

class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }

    mostrarDatos(){
        document.write("Nombre: "+this.nombre+`<br>`);
        document.write("Edad: "+this.edad+` años<br>`);
        document.write("DNI: "+this.dni+`<br>`);
        document.write("Sexo: "+this.sexo+`<br>`);
        document.write("Peso: "+this.peso+` Kg<br>`);
        document.write("Altura: "+this.altura+` cm<br>`);
        document.write("Año Nacimiento: "+this.anioNacimiento+`<br>`);
    }

    mostrarGeneracion(){
        if(this.anioNacimiento>=1994 && this.anioNacimiento<=2010){
            document.write("<h2>Pertenece a Generación Z</h2>");
            document.write("Rasgo característico: IRREVERENCIA");
        }else{
            if(this.anioNacimiento>=1981 && this.anioNacimiento<=1993){
                document.write("<h2>Pertenece a Generación Y (millennials)</h2>");
                document.write("Rasgo característico: FRUSTRACIÓN");
            }else{
                if(this.anioNacimiento>=1969 && this.anioNacimiento<=1980){
                    document.write("<h2>Pertenece a Generación X</h2>");
                    document.write("Rasgo característico: OBSESIÓN POR EL ÉXITO");
                }else{
                    if(this.anioNacimiento>=1949 && this.anioNacimiento<=1968){
                        document.write("<h2>Pertenece a Baby Boom</h2>");
                        document.write("Rasgo característico: AMBICIÓN");
                    }else{
                        if(this.anioNacimiento>=1930 && this.anioNacimiento<=1948){
                            document.write("<h2>Pertenece a Silent Generation (Los niños de la posguerra) X</h2>");
                            document.write("Rasgo característico: AUSTERIDAD");
                        }
                    }
                }
            }
        }
    }

    esMayorDeEdad(anioNacimiento){
        let anioActual=2023;
        if((anioActual-this.anioNacimiento)>=18){
            document.write("<h4> La persona es mayor de edad.</h4>");
        }else{
            document.write("<h4>La persona es menor de edad.</h4>");
        }
    } 
    
    generarDNI(){
        let numero = Math.floor((Math.random()*99999999));
        document.write(numero);
    }
}


const persona1 = new Persona("Juan",28,21121218,"M",70,189,1994);

persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();

generarDNI(); 