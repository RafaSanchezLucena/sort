const botonOrdenar = document.querySelector("#boton1");
const botonDesordenar = document.querySelector("#boton2");
const seleccion = document.querySelector(".selector")
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const siete = document.querySelector("#siete");
const ocho = document.querySelector("#ocho");
const nueve = document.querySelector("#nueve");
const diez = document.querySelector("#diez");
const once = document.querySelector("#once");
const doce = document.querySelector("#doce");
const trece = document.querySelector("#trece");
const catorce = document.querySelector("#catorce");
const quince = document.querySelector("#quince");
const dieciseis = document.querySelector("#dieciseis");
const diecisiete = document.querySelector("#diecisiete");
const dieciocho = document.querySelector("#dieciocho");
const diecinueve = document.querySelector("#diecinueve");
const veinte = document.querySelector("#veinte");

const cubos = [
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
  diez,
  once,
  doce,
  trece,
  catorce,
  quince,
  dieciseis,
  diecisiete,
  dieciocho,
  diecinueve,
  veinte,
];

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];


const crearCubos = (array) => {
  // Se asigna a los cubos los valores del array.
  for (let i = 0; i < array.length; i++) {
    cubos[i].innerHTML = array[i];
  }
};

crearCubos(array);

var lista = [];

const desordenarCubos = () => {
  // Cada vez que desordenamos los cubos, asignamos la clase "cubo" a todos los elementos.
  for (let indice = 0; indice < array.length; indice++) {
    cubos[indice].className = "cubo";
  };
  lista = _.shuffle(array); // Desordena la lista de números
  
  // Se reasigna los valores a los cubos que nos da el array "lista".
  for (let i = 0; i < lista.length; i++) {
    cubos[i].innerHTML = lista[i];
  }
};

botonDesordenar.addEventListener("click", () => {
  desordenarCubos();
});

const ralentizar = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, velocidad);
  });
};

const ordenarLista = async () => {
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1; j++) {
      if (lista[j] > lista[j + 1]) {
        let valorTemporal = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = valorTemporal;
        await ralentizar();
        crearCubos(lista);
        for (let indice = 0; indice < lista.length; indice++) {
          lista[indice] === array[indice]
            ? (cubos[indice].className = "ordenado") // Cambia el color del cubo si la posición es correcta.
            : (cubos[indice].className = "cubo"); // Mantiene el color blanco si la posición no es la correcta.
        }
      }
    }
  }
};

botonOrdenar.addEventListener("click", () => {
  ordenarLista();
});

// Iniciamos el valor de la velocidad de ejecución del algoritmo en 250
// y a continuación la podemos cambiar a través del elemento "select". 
let velocidad = 250;
seleccion.addEventListener("change", () => {
  velocidad = seleccion.value;
  switch (velocidad) {
    case "muyAlta":
      velocidad = 50;
      break;
    case "alta":
      velocidad = 100;
      break;
    case "media":
      velocidad = 250;
      break;
    default:
      velocidad = 500;
  }
})