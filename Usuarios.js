const entradaUsuario ={
    nombre:"Frisly",
    apellido: "Melchor",
    email: "Frislymelchord@gmail.com",
    telefono: "45852356",
    ciudad: "Guatemala",
    Pais: "Guatemal",
    Activo: true
};

console.log ("frislymelchord@gmial.com")
console.log ("contacto")

const usuarioFormateado = {
    Identidad: {nombre, apellido},
    contanto: {email, telefono},
    ubicacion: {ciudad, pais},
     ...{Activo}
};