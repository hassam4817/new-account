showNavOnScroll = () => {
	let navBar = document.querySelector('header.navbar');
	if(window.scrollY >= 10){
		navBar.classList.add('active');
	} else {
		navBar.classList.remove('active');
	}
}
window.onscroll = showNavOnScroll;
window.onload = showNavOnScroll;

let mobileMenu = document.querySelector('#mobile-menu');

document.querySelector('#menu-btn').onclick = () => {
	mobileMenu.classList.toggle('active');
}