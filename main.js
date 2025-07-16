
window.addEventListener("load", () => {
	/*animate on scroll */
	AOS.init();
});


/* header bg reveal*/



/*nav*/

const navigation = () => {
	const navToggler = document.querySelector(".js-nav-toggler");
	const nav = document.querySelector(".js-nav");
	const navItems = nav.querySelectorAll("li");
	
	const navToggle = () => {
		nav.classList.toggle("open");
		navToggler.classList.toggle("active");
	}
	navToggler.addEventListener("click", navToggle);
	
	navItems.forEach((li) => {
		li.querySelector("a").addEventListener("click", () => {
			if(window.innerwidth <=767){
				navToggle();
			}
		});
	});
}
navigation();