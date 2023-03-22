/*
Crear objetos
Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características 
como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.
 */


let auto = { 
    id: 125,    
    color: "Azul",  
    marca: "Ford" ,
    modelo: "Fiesta",
    encendido: false,   
    
    encender: function (){
        auto.encender = true;
        document.write(`<p>El motor está encendido</p>`);
    },
    apagar: function(){ document.write(`<p>El motor está apagado</p>`);
        auto.encender = false;
    }
}

auto.encender();
auto.apagar();

document.write("Color: "+auto.color+`<br> Marca: `+auto.marca+`<br> Modelo: `+auto.modelo+`<br> Encendido?: `+auto.encendido);