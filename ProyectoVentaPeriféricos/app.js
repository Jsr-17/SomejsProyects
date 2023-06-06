const boton=document.querySelector("#boton");
const header= document.querySelector("header");
const producto1=document.querySelector(".product-1");
const producto2=document.querySelector(".product-2");
const producto3=document.querySelector(".product-3");

console.log(producto1)

boton.addEventListener('click',()=>{
    header.scrollIntoView({
        behavior:"smooth"
    })
})

const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        producto1.classList.add("aparecer")
    } 
    });
  }

    let observer1 = new IntersectionObserver(callback);

    observer1.observe(producto1);

const callback2 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        producto2.classList.add("aparecer")
    } 
    });
  }

    let observer2 = new IntersectionObserver(callback2);

    observer2.observe(producto2);

const callback3 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        producto3.classList.add("aparecer")
    } 
    });
  }

    let observer3 = new IntersectionObserver(callback3);

    observer3.observe(producto3);

    
  


