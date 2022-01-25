const singup = document.querySelector(".singup");
const orderbtn = document.querySelector(".orderbtn");

singup.addEventListener("mouseover", (event) => {
	let a = (event.pageX - singup.offsetLeft);
	let b = (event.pageY - singup.offsetTop);

	singup.style.setProperty("--x", a + "px");
	singup.style.setProperty("--y", b + "px");

});

orderbtn.addEventListener("mouseover", (event) => {
	let xoo = (event.pageX - orderbtn.offsetLeft);
	let yoo = (event.pageY - orderbtn.offsetTop);
	orderbtn.style.setProperty("--xpos", xoo + "px");
	orderbtn.style.setProperty("--ypos", yoo + "px");

});