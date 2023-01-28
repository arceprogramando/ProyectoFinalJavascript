// Agregado De funcionalidad Boton

const menuBtn = document.querySelector('.menu-btn');
const listItems = document.querySelector('.nav-list');

let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        listItems.classList.add('visible');

        //De lo contrario se remove el open y pasa menuOpen a False
    } else {
        menuBtn.classList.remove('open');
        listItems.classList.remove('visible');
        menuOpen = false
    }
});

// Finalizacion Agregado de funcionalidad A boton



//Cambiar Color Background

const colors = [
    "#000000", "#FFFFFF", "#1E90FF", "#00FF00", "#FF0000", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF",
    "#C0C0C0", "#808080", "#800000", "#008000", "#000080", "#808000", "#008080", "#800080",
    "#F5F5DC", "#FFE4C4", "#F5DEB3", "#F0E68C", "#BDB76B", "#FFA07A", "#FF7F50", "#FF6347",
    "#FF4500", "#FFD700", "#FFFFE0", "#FAFAD2", "#FFEFD5", "#FFEBCD", "#FFE4B5", "#FFDAB9",
    "#EEE8AA", "#F0FFFF", "#F5F5F5", "#F8F8FF", "#F0FFF0", "#F0F8FF", "#F0FFFF", "#F5FFFA"
]


const btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor( Math.random() * colors.length);
    
}


//slider Inspirado en video de youtube https://www.youtube.com/watch?v=WI0aCIEYXvw

const slider = document.querySelector("#slider")

let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");


slider.insertAdjacentElement('afterbegin',sliderSectionLast)


function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%"
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend',sliderSectionFirst)
        slider.style.marginLeft = "-100%"
    }, 500)
}

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0"
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin',sliderSectionLast)
        slider.style.marginLeft = "-100%"
    }, 500)
}

btnRight.addEventListener('click',function(){
    moverDerecha();
})

btnLeft.addEventListener('click',function(){
    moverIzquierda();
})

setInterval(function(){
    moverDerecha();
},5000);
//Fin slider

//Comienzo Carrito

//Constante agregar boton para seleccionar lo que trae 
const addButton = document.querySelectorAll(".botonCompra")

//por cada add button , se va activar la funcion button
addButton.forEach(function (button) {
    //a button se le va a escuchar y cuando hace click va a agregar uno al contador de carrito
    button.addEventListener("click", addToCart)
    //a button se le va a escuchar y cuando hace click va a agregar un agregar a carrito
    // button.addEventListener("click",addPanel)
});


// inicializo mi cart count en 0
let cartCount = 0

function addToCart(e) {
    cartCount++;
    document.getElementById("cart").innerHTML = cartCount;
    let cartCountObject = {'count': cartCount};
    localStorage.setItem("cartCount", JSON.stringify(cartCountObject));
    console.log("producto agregado")
}

// Al cargar la página, recuperar el valor guardado en el almacenamiento local
window.addEventListener("load", function() {
    let cartCountObject = JSON.parse(localStorage.getItem("cartCount"));
    if (cartCountObject) {
    cartCount = cartCountObject.count;
    document.getElementById("cart").innerHTML = cartCount;
    }
    });


    let carrito = [];

    function agregar_a_carrito(e){
        console.log(e.target);
        let hijo = e.target;
        let padre = hijo.parentNode;
        let nombre_producto = padre.querySelector("h3").textContent;
        let precio_producto = padre.querySelector("span").textContent;
        
    
        console.log(nombre_producto);
        console.log(precio_producto);
    
        let producto = {
            nombre: nombre_producto,
            precio: precio_producto,
            cantidad: 1
        };

        mostrar_carrito( producto );
    }

//fin Carrito