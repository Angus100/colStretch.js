//colStretch by Angus Ramsay//

//Add required styles to the colStretch class
var css = "<style>.colStretch{ box-sizing: border-box; vertical-align: top;}</style>"
document.getElementsByTagName('head')[0].innerHTML += css;

function init()
{
	//Get the colStretch class
	stretchElements = document.getElementsByClassName('colStretch');
}
function resize()
{
	//Go through each colStretch element forwards and if it is the same distance down the page and smaller than the one before,
	//increase its height to be the same.
	stretchElements[0].style.height = "auto";
	for(var i = 1; i < stretchElements.length; i++){
		stretchElements[i].style.height = "auto";
		if(stretchElements[i].offsetTop == stretchElements[i-1].offsetTop){
			if(stretchElements[i].offsetHeight < stretchElements[i-1].offsetHeight){
				stretchElements[i].style.height = stretchElements[i-1].offsetHeight+"px";
			}
		}
	}
	//Go through each colStretch element backwards and if it is the same distance down the page and smaller than the one after,
	//increase its height to be the same.
	for(var i = stretchElements.length-2; i >= 0; i--){
		if(stretchElements[i].offsetTop == stretchElements[i+1].offsetTop){
			if(stretchElements[i].offsetHeight < stretchElements[i+1].offsetHeight){
				stretchElements[i].style.height = stretchElements[i+1].offsetHeight+"px";
			}
		}
	}
}
document.addEventListener("DOMContentLoaded",init);
document.addEventListener("DOMContentLoaded",resize);
window.addEventListener("resize",resize);
