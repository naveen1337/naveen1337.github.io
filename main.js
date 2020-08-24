let navb= document.getElementsByClassName('navbar-burger burger')[0];
let dnav= document.getElementsByClassName('navbar-menu')[0];

navb.addEventListener('click',()=>{
	navb.classList.toggle("is-active");
	dnav.classList.toggle("is-active")
})