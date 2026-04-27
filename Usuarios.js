const entradaUsuario = {
    nombre: "Frisly",
    apellido: "Melchor",
    email: "Frislymelchord@gmail.com",
    telefono: "45852356",
    ciudad: "Guatemala",
    Pais: "Guatemala", 
    Activo: true       
};

const { 
    nombre, 
    apellido, 
    email: correo, 
    telefono: contacto, 
    ciudad, 
    Pais, 
    Activo 
} = entradaUsuario;

const usuarioFormateado = {
    identidad: { nombre, apellido },
    contacto: { correo, contacto },
    ubicacion: { ciudad, pais: Pais },
    ...{ Activo }
};

console.log("--- OBJETO FINAL ---");
console.log(usuarioFormateado);
