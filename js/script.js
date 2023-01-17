// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu di click
document.querySelector("#humberger-menu").onclick = () => {
	navbarNav.classList.toggle("active");
};

// Klik Diluar Sidebar untuk menghhilangkan nav

const humburgerMneu = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
	if (!humburgerMneu.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});
