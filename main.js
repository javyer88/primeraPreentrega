
//EL PROGRAMA PIDE CARGAR UNA CIERTA CANTIDAD  DE ALUMNOS QUE SE PASA A UNA FUNCION PARA SER MOSTRADA POR CONSOLA
// Y ADEMAS CALCULA EL PROMEDIO DE EDAD LOS ALUMNOS.





function alumno(listaDealumnos){       // imprime lista de alumnos 
    console.log(listaDealumnos); 
}

function apellidoAusente(listaDealumnos, ausente){      // verifica si alumno esta ausente
    if(listaDealumnos.includes(ausente)===true) {
        console.log("El alumno esta presente" );} 

    else {
        console.log("El alumno esta ausente" );}

}

const listaDealumnos=[];

let cantidadAlumnos=prompt("ingrese cantidad de alumnos");

let sumaEdad=0;

for(let i=0; i<cantidadAlumnos; i++){
    let apellidoAlumno= prompt("ingresar apellido");
    let edadAlumno= Number(prompt("ingresar edad"));
    listaDealumnos.push(apellidoAlumno); //cargo alumnos en arreglo vacio

    sumaEdad=sumaEdad+edadAlumno;

}
let ausente=prompt("Ingrese a apellido alumno para saber si esta ausente")
apellidoAusente(listaDealumnos,ausente);// llamo a funcion para verificar ausencia


alumno(listaDealumnos)//muestro listo de alumnos

let promedioEdad= sumaEdad/cantidadAlumnos;
parseFloat(console.log("El promedio de edad de alumnos: " , promedioEdad));// muestro promedio

