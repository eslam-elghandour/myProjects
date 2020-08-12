const menuToggle = document.querySelector('.menu');
const menu = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-list li');
const nav = document.querySelector('.main-nav ul');

menuToggle.onclick = function() {
	menu.classList.toggle('open');
	menuToggle.classList.toggle('open');

	for (let i = 0; i < navItems.length; i++) {
		navItems[i].classList.toggle('open');
	}
};
