var x1 = null;
var y1 = null;

var c = document.getElementById("vimage");
var clr = document.getElementById("clear");

clr.addEventListener("click", function(e) { clrCanvas(e);});
tog.addEventListener("click", function() { togl(); });
c.addEventListener("click", function(e) { draw(e); });


var draw = function(e){
    if(x1 != null){
	e.preventDefault();
	var connect = createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("
	    line.setAttribute(
		line.setAttribute(
		    line.setAttribute(
			
    }
}

var clrCanvas = function(e){
    e.preventDefault();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 600, 600);
}


