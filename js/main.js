(() => {
	//stub
    console.log('fired!');
    //selet elements with Javascript

    //setting up a variable using the let keyword,
    //and using the CSS selector to find the element we want to use.

    //let store the reference to element as a variable (in memory)

    let svgGraphic = document.querySelector("#badgeSVG"),
        mainHeadline = document.querySelector(".main-headline"),
        subHead = document.querySelector("#raster-vector h3"),
        swapTextButton = document.querySelector(".switch-type");
    //let store the reference to element as a variable (in memory)


     //functions are reusable pieces of code
     //that you can run any time
   function logMyId() {
    	console.log(this.id);
    	this.style.opacity = 0.5;
    }

    function swapText() {
      mainHeadline.textContent = "Now you're something else!";
      mainHeadline.classList.toggle("selected");
      subHead.textContent = "You're also something else!";
      subHead.classList.toggle("selected");
    }

    //event always go down here

    svgGraphic.addEventListener("click", logMyId);
    swapTextButton.addEventListener("click", swapText);

})();
