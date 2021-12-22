let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("Ingrese su nombre por favor");
  datosPersona.edad = 2021 - (parseInt(prompt("Ingrese su año de nacimiento por favor")));
  datosPersona.ciudad = prompt("Ingrese el nombre de la ciudad donde vive por favor");
  let preferencia = confirm("Si le interesa Javascript, click en aceptar");
  if (preferencia === true) {
    datosPersona.interesPorJs = "Si";
  } else {
    datosPersona.interesPorJs = "No";
  }
};


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */

  obtenerDatosDelUsuario();

  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  let inputNombre = document.querySelector('#nombre');
  inputNombre.innerHTML = datosPersona.nombre;

  let inputEdad = document.querySelector("#edad");
  inputEdad.innerHTML = datosPersona.edad;

  let inputCiudad = document.querySelector("#ciudad");
  inputCiudad.innerHTML = datosPersona.ciudad;

  let interesJs = document.querySelector("#javascript");
  interesJs.innerHTML = datosPersona.interesPorJs;

}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const CONTENEDOR = document.querySelector('#fila');

  listado.forEach(item => {
    CONTENEDOR.innerHTML +=
      `<div class ='caja'>
    <img src= ${item.imgUrl} alt= ${item.lenguajes}>
    <p class ='lenguajes'> Lenguajes: ${item.lenguajes}</p>
    <p class ='bimestre'> Bimestre: ${item.bimestre}</p>
    </div>`
  });
}

function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  let informacion = document.querySelector('.sobre-mi');
  informacion.classList.toggle('sobre-mi-completo');
}