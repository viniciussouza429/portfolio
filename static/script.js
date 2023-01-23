/*abre e fecha menu lateral em modo mobile */


const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector('body');

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ?   menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list"); 
    body.classList.toggle("menu-nav-active");
});


/* fecha menu quando clicar no item e muda ele para list */

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener("click", () => {
            if (body.classList.contains("menu-nav-active")) {
                body.classList.remove("menu-nav-active")
                menuMobile.classList.replace("bi-x", "bi-list")
            }  
    })
})


//animar itens com data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.55;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=> {
    animeScroll();
})


//ativar botao enviar

const btnEnviar = document.querySelector('#btn-enviar')

btnEnviar.addEventListener("click", ()=> {
        btnEnviarLoader.style.display = "block";
        btnEnviar.style.display = "none"
})


// tirar a msg dps de 5 sec

setTimeout(()=> {
    document.querySelector('#alerta').style.display = 'none';
}, 5000)