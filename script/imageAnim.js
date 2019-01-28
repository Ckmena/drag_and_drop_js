(() => {
	console.log('fired');

	const theButton = document.querySelector("#buttonHolder img")

	//window.addEventListener("load", changeHeadLine);

	function changeHeadLine(){
		document.querySelector("h1").textContent = "hey there from JS";
		document.querySelector('p').textContent = "Drag and Drop";
	}

	// set up the puzzle pieces and boards
	//
	//debugger; 
	//(to write in the browser and try your code)
	theButton.addEventListener("click", changeHeadLine)
})();
