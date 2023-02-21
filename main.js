const PASS = 1234;

alert("¡Bienvenido a la Juegoteca!");
let nombreUsuario = prompt("Por favor, ingrese su nombre de usuario");
while (nombreUsuario == "") {
  alert("Nombre de usuario ingresado no es válido");
  nombreUsuario = prompt("Por favor, ingrese su nombre de usuario");
}
alert(`Hola ${nombreUsuario}!`);
let contrasenia = Number(prompt("Por favor, ingrese la contraseña"));
while (contrasenia != PASS) {
  alert("Contraseña ingresada es incorrecta");
  contrasenia = Number(prompt("Por favor, ingrese la contraseña correcta"));
}
alert("Contraseña correcta");
console.log(`El usuario ${nombreUsuario} se ha logueado correctamente`);
let = juegoelegido = prompt(`Entraron los siguientes juegos:
Carmagedon
Burnout
Crash
Supermario 64

Elija el que desea llevar:

Si queres finalizar ingresa la palabra "Esc"`).toLowerCase();

while (juegoelegido != "esc") {
  switch (juegoelegido) {
    case "carmagedon":
      alert(`Elegiste el Carmagedon, excelente decisión!

  Aquí una breve descripción del juego:

  Carmagedon es un videojuego de combate en vehículos creado en 1997 que destacó por incluir una proporción importante de violencia en su modo de juego. El juego tiene como misión principal acabar la carrera o destrozar los coches de los contrarios, no obstante la matanza de peatones es un aliciente.`);
  mostrarJuegoPorClog(juegoelegido)
      break;
    case "burnout":
      alert(`Elegiste el Burnout, excelente decisión!

  Aquí una breve descripción del juego:

  Burnout es una serie de videojuegos de carreras de tipo arcade, del cual se ha lanzado una edición por año desde 2001.Burnout fue el primero de una serie de videojuegos de alta velocidad destacado por sobre todo sus choques y su mecánica de jugabilidad de alto riesgo. El éxito del juego lo llevó a varias secuelas.`);
  mostrarJuegoPorClog(juegoelegido)
      break;
    case "crash":
      alert(`Elegiste el Crash, excelente decisión!

  Aquí una breve descripción del juego:

  Crash Bandicoot es el nombre de una serie de videojuegos protagonizado por el personaje del mismo nombre. Fue creada en 1996 por Naughty Dog, quien desarrolló los primeros cuatro títulos, bajo la distribución de Universal Interactive Studios. Los tres primeros juegos pertenecen al género de plataformas, sin embargo, con el tiempo se fue diversificando a otros géneros. La serie ha vendido más de 50 millones de copias en todo el mundo.`);
  mostrarJuegoPorClog(juegoelegido)
      break;
    case "supermario 64":
      alert(`Elegiste el Supermario 64, excelente decisión!

  Aquí una breve descripción del juego:

  Super Mario 64, el primer juego de plataformas en 3D de la saga de Super Mario, estableció un nuevo arquetipo para el género (gracias a su forma de juego, totalmente libre, y el formato de sus gráficos 3D poligonales mezclados con sprites bidimensionales) tal como Super Mario Bros. lo hizo para los juegos de plataformas en dos dimensiones. El juego ha sido llamado «revolucionario» y no solo ha influenciado a muchos grandes juegos en su género, sino que también ha tenido un duradero impacto en los juegos 3D en general.`);
  mostrarJuegoPorClog(juegoelegido)
      break;
    default:
      alert(
        `${juegoelegido} no es una opción válida, por favor siga las intrucciones para que podamos tomar correctamente su pedido`
      );
      break;
  }
  juegoelegido = prompt(`Entraron los siguientes juegos:
  Carmagedon
  Burnout
  Crash
  Supermario 64
  
  Elija el que desea llevar:

Si queres finalizar ingresa la palabra "Esc"`).toLowerCase();
}
alert(`Que buena elección ${nombreUsuario}!`);

let distanciaEnvio = prompt(
  `Ahora vamos a calcular el costo de envío dependiendo de la distancia a la que te encuentres. Por favor, indicanos a cuantos km te encontras de la sucursal: `
);

while (distanciaEnvio == "") {
  alert("Opción elegida no es válida");
  distanciaEnvio = prompt(
    `Ahora vamos a calcular el costo de envío dependiendo de la distancia a la que te encuentres. Por favor, indicanos a cuantos km te encontras de la sucursal: `
  );
}

let costoEnvio = calcularCostoEnvio(distanciaEnvio)
alert("El costo del envío es de: " +  costoEnvio + "$");
console.log("El costo de envío es de: " + costoEnvio)

let domicilio = prompt(
  `${nombreUsuario}, por favor, ingresa tu domicilio a continuación para que el reparto pueda pasar por tu casa a entregarte el pedido: `
);
let diaDeEntrega =
  prompt(`${nombreUsuario}, por favor indicanos cual de los siguientes días te encontras en tu domicilio. Tene en cuenta que son los únicos días que hacemos reparto:

jueves
viernes
sabado
domingo 
`).toLowerCase();

while (
  diaDeEntrega != "jueves" &&
  diaDeEntrega != "viernes" &&
  diaDeEntrega != "sabado" &&
  diaDeEntrega != "domingo"
) {
  if (
    diaDeEntrega == "lunes" ||
    diaDeEntrega == "martes" ||
    diaDeEntrega == "miercoles"
  ) {
    alert(
      "Ups, ese día no contamos con entrega :( Por favor elije uno de los días sugeridos:"
    );
    diaDeEntrega =
      prompt(`${nombreUsuario}, por favor indicanos cual de los siguientes días te encontras en tu domicilio. Tene en cuenta que son los únicos días que hacemos reparto:

jueves
viernes
sabado
domingo 
`).toLowerCase();
  } else {
    alert(
      `${diaDeEntrega} no es una opcíón válida. Por favor, lee las indicaciones atentamente`
    );
    diaDeEntrega =
      prompt(`${nombreUsuario}, por favor indicanos cual de los siguientes días te encontras en tu domicilio. Tene en cuenta que son los únicos días que hacemos reparto:

jueves
viernes
sabado
domingo 
`).toLowerCase();
  }
}

alert(
  `Muchas gracias ${nombreUsuario}!, recibiras el pedido en ${domicilio} el día ${diaDeEntrega}. Vuelva prontos!`
);
console.log(
  "Se entregará en el domicilio: " + domicilio + " el día: " + diaDeEntrega
);

function calcularCostoEnvio(distancia) {
  let costoEnvio = distancia * 150;
  return costoEnvio;
}

function mostrarJuegoPorClog (juego){
    console.log("Juego elegido: " + juego)
}