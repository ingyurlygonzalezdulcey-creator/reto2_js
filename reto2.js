const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20 },
{ id: 2, nombre: 'Juan', edad: 22 },
{ id: 3, nombre: 'María', edad: 21 },
];


const buscarId = (id,ms) =>
    new Promise((resolve, reject)=>{
        if (estudiantes.id == id) {
            resolve `Nombre ${estudiantes[id].nombre}, edad ${estudiantes[id].edad}`
        } else {
            reject `Estudiante con ese id no existe ${id}`
        }
    });

    buscarId(2).then((resultado)=>console.log(resultado))
    .catch((e)=> console.log("Error", e))

    buscarId(1).then((resultado)=>console.log(resultado))
    .catch((e)=> console.log("Error", e))

    buscarId(10).then((resultado)=>console.log(resultado))
    .catch((e)=> console.log("Error", e))