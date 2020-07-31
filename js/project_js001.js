var animate;
function covid19_close(){
	animate=setTimeout(closeUP, 50);
	function closeUP(){
		document.getElementById('covid1901').style.opacity="0.9";
		animate=setTimeout(closeUP02, 50);
	}
	function closeUP02() {
		document.getElementById('covid1901').style.opacity="0.8";
		animate=setTimeout(closeUP03, 50);
	}
	function closeUP03() {
		document.getElementById('covid1901').style.opacity="0.7";
		animate=setTimeout(closeUP04, 50);
	}
	function closeUP04() {
		document.getElementById('covid1901').style.opacity="0.6";
		animate=setTimeout(closeUP05, 50);
	}
	function closeUP05() {
		document.getElementById('covid1901').style.opacity="0.5";
		animate=setTimeout(closeUP06, 50);
	}
	function closeUP06() {
		document.getElementById('covid1901').style.opacity="0.3";
		animate=setTimeout(closeUP07, 50);
	}
	function closeUP07() {
		document.getElementById('covid1901').style.opacity="0.2";
		animate=setTimeout(closeUP08, 50);
	}
	function closeUP08() {
		document.getElementById('covid1901').style.display="none";
	}
}