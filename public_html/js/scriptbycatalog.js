
function myFunction() {
	var elem = document.getElementById("menu");
	var elem1 = document.getElementById("loudsound");
	console.log(window.pageYOffset);
	if (window.pageYOffset > 310) {
		elem.style.position = "fixed";
		elem.style.top = "0px";
	} else {
		elem.style.position = "relative";	
	}
}
alert("Ведётся разработка. Приносим извинения за временные неудобства!")