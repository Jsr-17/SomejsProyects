const headerImg = document.querySelector(".backgroundImage");

const rd1 = document.querySelector("#rd1");
const rd2 = document.querySelector("#rd2");

const header = document.querySelector("header")

const productBtn = document.getElementById('buttons');
const productBtn1 = document.getElementById('productBtn1');
const productBtn2 = document.getElementById('productBtn2');
const productBtn3 = document.getElementById('productBtn3');
const productBtn4 = document.getElementById('productBtn4');
const productBtn5 = document.getElementById('productBtn5');

const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const modal5 = document.getElementById('modal5');

const arrowlA = document.querySelector('#arrowlA');
const arrowrA = document.querySelector('#arrowrA');
const arrowlB = document.querySelector('#arrowlB');
const arrowrB = document.querySelector('#arrowrB');
const arrowlS = document.querySelector('#arrowlS');
const arrowrS = document.querySelector('#arrowrS');
const arrowlG = document.querySelector('#arrowlG');
const arrowrG = document.querySelector('#arrowrG');
const arrowlT = document.querySelector('#arrowlT');
const arrowrT = document.querySelector('#arrowrT');

const imgCarouselTomate = document.querySelector('#imgCarousel5')
const imgCarouselManzanas = document.querySelector('#imgCarousel1')
const imgCarouselBrocoli = document.querySelector('#imgCarousel2')
const imgCarouselSandia = document.querySelector('#imgCarousel3')
const imgCarouselGarbanzos = document.querySelector('#imgCarousel4')

const closeBtn1 = document.querySelector('#closeButton1');
const closeBtn2 = document.querySelector('#closeButton2');
const closeBtn3 = document.querySelector('#closeButton3');
const closeBtn4 = document.querySelector('#closeButton4');
const closeBtn5 = document.querySelector('#closeButton5');

const exp1 = document.querySelector('#exp-1');
const exp2 = document.querySelector('#exp-2');
const exp3 = document.querySelector('#exp-3');
const exp4 = document.querySelector('#exp-4');

let imgExp = document.querySelector('#imgExp');
let tituloExp = document.querySelector('#tituloExp');
let precioExp = document.querySelector('#precioExp');
let descExp = document.querySelector('#descExp');

const upExp = document.querySelector("#up-exp");
const downExp = document.querySelector("#down-exp")

const carrito = document.querySelector('#carrito')
const Carrito = document.querySelector('#Carrito')
const contenedorCarrito = document.querySelector('#contenedorCarrito')

let imgsCarouselTomates = {
  0: "TomatesCampo1.jpg",
  1: "TomatesCampo2.jpg",
  2: "TomatesCampo3.jpg"
}
let imgsCarouselManzanas = {
  0: "manzanas1.jpg",
  1: "manzanas2.jpg",
  2: "manzanas3.jpg"
}
let imgsCarouselGarbanzos = {
  0: "garbanzo1.jpg",
  1: "garbanzo2.jpg",
  2: "garbanzo3.jpg"
}
let imgsCarouselBrocoli = {
  0: "brocoli1.jpg",
  1: "brocoli2.jpg",
  2: "brocoli3.jpeg"
}
let imgsCarouselSandia = {
  0: "sandia.jpg",
  1: "sandia2.jpg",
  2: "sandia3.jpg"
}
let infoManzana = {
  título: "Manzana",
  precio: "Desde: 1.20/kg",
  img: "apple.jpg",
  descripcion: "Estas manzanas provienen de la comarca de Granada, comprados a agricultores locales , utilizando 0 fertilizantes artificiales"
}
let infoPera = {
  título: "Pera",
  precio: "Desde: 1.30/kg",
  img: "pera.png",
  descripcion: "Estas peras provienen de la comarca de Granada, comprados a agricultores locales , utilizando 0 fertilizantes artificiales"
}
let infoSandia = {
  título: "Sandia",
  precio: "Desde: 2.30/kg",
  img: "sandia.jpg",
  descripcion: "Estas sandias provienen de la comarca de Granada, comprados a agricultores locales , utilizando 0 fertilizantes artificiales"
}
let infoLechuga = {
  título: "Lechuga",
  precio: "Desde: 0.50/kg",
  img: "lechuga.jpg",
  descripcion: "Estas lechugas provienen de la comarca de Granada, comprados a agricultores locales , utilizando 0 fertilizantes artificiales"
}

let ArrayInfo = [infoManzana, infoPera, infoSandia, infoLechuga]


const elementosPadre=[]


let currentIndex = 0
let position = 0



rd1.addEventListener("change", function () {
  if (rd1.checked) {
    headerImg.style.backgroundImage = 'url("frutas1.jpg")';
  }
});

rd2.addEventListener("change", function () {
  if (rd2.checked) {
    headerImg.style.backgroundImage = 'url("frutas.jpg")';
  }
});

productBtn1.addEventListener('click', function () {
  modal1.style.display = 'block';
});

productBtn2.addEventListener('click', function () {
  modal2.style.display = 'block';
});

productBtn3.addEventListener('click', function () {
  modal3.style.display = 'block';
});

productBtn4.addEventListener('click', function () {
  modal4.style.display = 'block';
});

productBtn5.addEventListener('click', function () {
  modal5.style.display = 'block';
});


closeBtn1.addEventListener('click', function () {
  modal1.style.display = 'none';
  currentIndex = 0
});

closeBtn2.addEventListener('click', function () {
  modal2.style.display = 'none';
  currentIndex = 0
});
closeBtn3.addEventListener('click', function () {
  modal3.style.display = 'none';
  currentIndex = 0
});
closeBtn4.addEventListener('click', function () {
  modal4.style.display = 'none';
  currentIndex = 0
});
closeBtn5.addEventListener('click', function () {
  modal5.style.display = 'none';
  currentIndex = 0
});

arrowrA.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++
    imgCarousel1.src = imgsCarouselManzanas[currentIndex]

  } else {
    return
  }
})
arrowlA.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    imgCarousel1.src = imgsCarouselManzanas[currentIndex]
  } else {
    return
  }
})
arrowrB.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++
    imgCarousel2.src = imgsCarouselBrocoli[currentIndex]
  } else {
    return
  }
})
arrowlB.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    imgCarousel2.src = imgsCarouselBrocoli[currentIndex]
  } else {
    return
  }

})
arrowrS.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++
    imgCarousel3.src = imgsCarouselSandia[currentIndex]
  } else {
    return
  }
})
arrowlS.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    imgCarousel3.src = imgsCarouselSandia[currentIndex]
  } else {
    return
  }
})
arrowrG.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++
    imgCarousel4.src = imgsCarouselGarbanzos[currentIndex]
  } else {
    return
  }
})
arrowlG.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    imgCarousel4.src = imgsCarouselGarbanzos[currentIndex]
  } else {
    return
  }
})
arrowrT.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++
    imgCarousel5.src = imgsCarouselTomates[currentIndex]
  } else {
    return
  }
})
arrowlT.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    imgCarousel5.src = imgsCarouselTomates[currentIndex]
  } else {
    return
  }
})

document.addEventListener('DOMContentLoaded', () => {
  imgExp.src = infoManzana.img
  tituloExp.textContent = infoManzana.título
  precioExp.textContent = infoManzana.precio
  descExp.textContent = infoManzana.descripcion
  exp1.style.border = "rgba(98, 174, 174, 0.662) 5px solid "

})

exp1.addEventListener('click', () => {

  imgExp.src = infoManzana.img
  tituloExp.textContent = infoManzana.título
  precioExp.textContent = infoManzana.precio
  descExp.textContent = infoManzana.descripcion

  exp1.style.border = "rgba(98, 174, 174, 0.662) 5px solid "
  exp2.style.border = "3px solid rgb(104, 100, 100) "
  exp3.style.border = "3px solid rgb(104, 100, 100) "
  exp4.style.border = "3px solid rgb(104, 100, 100) "
})

exp2.addEventListener('click', () => {
  imgExp.src = infoPera.img;
  tituloExp.textContent = infoPera.título;
  precioExp.textContent = infoPera.precio;
  descExp.textContent = infoPera.descripcion;

  exp2.style.border = "rgba(98, 174, 174, 0.662) 5px solid "
  exp1.style.border = "3px solid rgb(104, 100, 100) "
  exp3.style.border = "3px solid rgb(104, 100, 100) "
  exp4.style.border = "3px solid rgb(104, 100, 100) "

});
exp3.addEventListener('click', () => {
  imgExp.src = infoSandia.img;
  tituloExp.textContent = infoSandia.título;
  precioExp.textContent = infoSandia.precio;
  descExp.textContent = infoSandia.descripcion;

  exp3.style.border = "rgba(98, 174, 174, 0.662) 5px solid "
  exp2.style.border = "3px solid rgb(104, 100, 100) "
  exp1.style.border = "3px solid rgb(104, 100, 100) "
  exp4.style.border = "3px solid rgb(104, 100, 100) "
})
exp4.addEventListener('click', () => {
  imgExp.src = infoLechuga.img;
  tituloExp.textContent = infoLechuga.título;
  precioExp.textContent = infoLechuga.precio;
  descExp.textContent = infoLechuga.descripcion;

  exp4.style.border = "rgba(98, 174, 174, 0.662) 5px solid "
  exp2.style.border = "3px solid rgb(104, 100, 100) "
  exp3.style.border = "3px solid rgb(104, 100, 100) "
  exp1.style.border = "3px solid rgb(104, 100, 100) "
})

const fechaObjetivo = new Date('2023-12-31T23:59:59');

function mostrarCuentaRegresiva() {

  const fechaActual = new Date();
  const diferenciaTiempo = fechaObjetivo - fechaActual;
  const segundosTotales = Math.floor(diferenciaTiempo / 1000);
  const segundos = segundosTotales % 60;
  const minutos = Math.floor((segundosTotales / 60) % 60);
  const horas = Math.floor((segundosTotales / (60 * 60)) % 24);
  const dias = Math.floor(segundosTotales / (60 * 60 * 24));

  const diasHtml = document.getElementById('dias');
  diasHtml.textContent = `Días: ${dias}`

  const horasHtml = document.getElementById('horas');
  horasHtml.textContent = `Horas: ${horas}`

  const segundoHtml = document.getElementById('segundos');
  segundoHtml.textContent = `Segs: ${segundos}`

  const minutosHtml = document.getElementById('minutos');
  minutosHtml.textContent = `Mins: ${minutos}`

}
mostrarCuentaRegresiva();
setInterval(mostrarCuentaRegresiva, 1000);

carrito.addEventListener('click', () => {
  Carrito.style.display = (Carrito.style.display === 'none') ? 'flex' : 'none';
})

if (contenedorCarrito.childElementCount == 0) {
  const mensaje = document.createElement('div')
  mensaje.innerHTML="El carrito está vacío"
  mensaje.style.height="350px";
  mensaje.style.display = "flex";
  mensaje.style.justifyContent = "center";
  mensaje.style.alignItems = "center";
  mensaje.id="cpm"
  contenedorCarrito.appendChild(mensaje)
}

function generaCarrito(){

  Carrito.style.justifyContent="flex-start";
  Carrito.style.alignItems="flex-start";
  contenedorCarrito.style.flexDirection="column";

  const elementoPadre=document.createElement('div');
  elementoPadre.classList.add('carritosProductos');

  const imgElemento=document.createElement('img');
  imgElemento.src=imgExp.src

  const elementoTítulo=document.createElement('h3');
  elementoTítulo.textContent=tituloExp.textContent;

  const botonEliminar=document.createElement('span');
  botonEliminar.textContent="×"

  contenedorCarrito.appendChild(elementoPadre)
  elementoPadre.appendChild(botonEliminar)
  elementoPadre.appendChild(imgElemento)
  elementoPadre.appendChild(elementoTítulo)

  verificarEstadoCarrito()

  botonEliminar.onclick = function() {
    contenedorCarrito.removeChild(elementoPadre)
    if (contenedorCarrito.childElementCount === 0){
      const mensaje = document.createElement('div')
      mensaje.innerHTML="El carrito está vacío"
      mensaje.id="cpm"
      mensaje.style.height="350px";
      mensaje.style.display = "flex";
      mensaje.style.justifyContent = "center";
      mensaje.style.alignItems = "center";
      Carrito.style.justifyContent="center";
      Carrito.style.alignItems="center";
      contenedorCarrito.appendChild(mensaje)
    }
  }
}

function verificarEstadoCarrito() {
  if (contenedorCarrito.childElementCount != 0) {
    const mensaje = contenedorCarrito.querySelector('#cpm');
    if (mensaje) {
      contenedorCarrito.removeChild(mensaje);
  } 
}
}


//   function handleArrowClick(imgCarouselId, currentIndex, imgsCarousel) {
//   const imgCarousel = document.getElementById(imgCarouselId);

//   if (currentIndex < 2) {
//     currentIndex = currentIndex + 1;
//     imgCarousel.src = imgsCarousel[currentIndex];
//   } else {
//     return;
//   }
// }
// arrowr.addEventListener('click',()=>{

//   if (imgCarouselTomate.classList.contains('tomato')) {
//     if (currentIndex<2){
//       currentIndex=currentIndex + 1
//       imgCarousel.src=imgsCarouselTomates[currentIndex]
//     }else{
//       return
//     }
//   } else if (imgCarousel.classList.contains('manzana')) {
//     if (currentIndex<2){
//       currentIndex=currentIndex + 1
//       imgCarousel.src=imgsCarouselManzanas[currentIndex]
//     }else{
//       return
//     }

//     } else if (imgCarousel.classList.contains('garbanzos')) {
//       if (currentIndex<2){
//       currentIndex=currentIndex + 1
//       imgCarousel.src=imgsCarouselGarbanzos[currentIndex]
//     }else{
//       return
//     }
//   } else if (imgCarousel.classList.contains('brocoli')) {
//     if (currentIndex<2){
//       currentIndex=currentIndex + 1
//       imgCarousel.src=imgsCarouselBrocoli[currentIndex]
//     }else{
//       return
//     }
//   } else if (imgCarousel.classList.contains('sandia')) {
//     if (currentIndex<2){
//       currentIndex=currentIndex + 1
//       imgCarousel.src=imgsCarouselSandia[currentIndex]
//     }else{
//       return
//     }     }
//   });


// arrowl.addEventListener('click',()=>{

// if (imgCarousel.classList.contains('tomato')) {
//   if (currentIndex>0){
//     currentIndex--
//     imgCarousel.src=imgsCarouselTomates[currentIndex]
//   }else{
//     return
//   }
// } else if (imgCarousel.classList.contains('manzana')) {
//   if (currentIndex>0){
//     currentIndex--
//     imgCarousel.src=imgsCarouselManzanas[currentIndex]
//   }else{
//     return
//   }
// } else if (imgCarousel.classList.contains('garbanzos')) {
//   if (currentIndex>0){
//     currentIndex--
//     imgCarousel.src=imgsCarouselGarbanzos[currentIndex]
//   }else{
//     return
//   }
// } else if (imgCarousel.classList.contains('brocoli')) {
//   if (currentIndex>0){
//     currentIndex--
//     imgCarousel.src=imgsCarouselBrocoli[currentIndex]
//   }else{
//     return
//   }
// } else if (imgCarousel.classList.contains('sandia')) {
//   if (currentIndex>0){
//     currentIndex--
//     imgCarousel.src=imgsCarouselSandia[currentIndex]
//   }else{
//     return
//   }
// }
// });


