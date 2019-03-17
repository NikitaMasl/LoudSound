
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

function changeStylleMain(key, key1){
	var content_divs = document.getElementsByClassName('main_content');
	[].forEach.call(content_divs, function(el) {
		el.style.display = 'none';
	});
	document.getElementById(key).style.display = 'block';

	var menu_items = document.getElementsByClassName('menu_item');
	[].forEach.call(menu_items, function(el) {
		el.classList.remove ('active');
	});
	document.getElementById(key1).classList.add ('active');	
}

function formaAppearance(){
		document.getElementById('contaktform').style.display = 'block';
}

function formaclose(){
		document.getElementById('contaktform').style.display = 'none';
}

function changeStylleCatalog(){
    document.getElementsByClassName('categ').style.display = 'none';
}
