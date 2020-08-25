let navb= document.getElementsByClassName('navbar-burger burger')[0];
let dnav= document.getElementsByClassName('navbar-menu')[0];

navb.addEventListener('click',()=>{
	navb.classList.toggle("is-active");
	dnav.classList.toggle("is-active")
})

let data = fetch('https://raw.githubusercontent.com/naveen1337/__public-share/master/status.json')
.then(data=>data.json())
.then(a=>document.getElementById('status').innerText=a.task)