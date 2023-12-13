
//EL PROGRAMA PIDE CARGAR UNA CIERTA CANTIDAD  DE ALUMNOS QUE SE PASA A UNA FUNCION PARA SER MOSTRADA POR CONSOLA
// Y ADEMAS CALCULA EL PROMEDIO DE EDAD LOS ALUMNOS.





function alumno(nombre, apellido, edad){
    console.log(nombre," ", apellido," " ,edad);

}

let cantidadAlumnos=2;
let sumaEdad=0;

for(let i=0; i<cantidadAlumnos; i++){
    let nombreAlumno= prompt("ingresar nombre");
    let apellidoAlumno= prompt("ingresar apellido");
    let edadAlumno= Number(prompt("ingresar edad"));
    alumno(nombreAlumno,apellidoAlumno,parseInt(edadAlumno))
    sumaEdad=sumaEdad+edadAlumno;

}
let promedioEdad= sumaEdad/cantidadAlumnos;
parseFloat(console.log("El promedio de edad de alumnos: " , promedioEdad));