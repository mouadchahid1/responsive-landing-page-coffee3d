 
/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"), 
      navClose = document.getElementById("nav-close"),
      navToogle = document.getElementById("nav-toogle") ; 
if(navClose) {
    navClose.addEventListener("click",()=> { 
       navMenu.classList.remove("show-menu");
    })
} 
if(navToogle) { 
    navToogle.addEventListener("click",()=> { 
       navMenu.classList.add("show-menu");
})
};
/*===== MOUSEMOVE HOME IMG =====*/ 
function move(e) {
    this.querySelectorAll(".move").forEach(layer => {
        const speed = layer.getAttribute("data-speed"); 

        const x = (window.innerWidth - e.pageX * speed)/120;
        const  y = (window.innerHeight - e.pageY * speed)/120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }) ; 

 }
 document.addEventListener("mousemove",move) ; 


/*===== GSAP ANIMATION =====*/
 // nav 
 gsap.from(".nav__logo , .nav__toogle " ,{opacity : 0  , delay: 0.4 , y: 10})  
 gsap.from(".nav__item" ,{opacity : 0 ,   delay: 0.4 , y: 30, stagger:0.2}) 
 gsap.from(".home__title" ,{opacity : 0 ,   delay: 1 , y: 30  }) 
 gsap.from(".home__description" ,{opacity : 0 ,   delay: 1.2 , y: 40  })   
 gsap.from(".home__button" ,{opacity : 0 ,   delay: 1.4 , y: 50  })  

