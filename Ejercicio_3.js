function transformarNombres(personas) {
    return personas.map(persona => persona.nombre.toUpperCase());
}

const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

const nombremayuscula = transformarNombres(personas);

console.log(nombremayuscula);