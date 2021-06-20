document.addEventListener('mousemove',divcreater);
let mouseX;
let mouseY;
function divcreater(e){
    mouseX=e.clientX;
    mouseY=e.clientY;
    console.log("MOVE");
body=document.createElement('body');
svg=document.createElement('svg');
circle=document.createElement('circle');
svg.setAttribute("height", "100%");
svg.setAttribute("width", "100%");
svg.setAttribute("style", "z-index: 500");
svg.setAttribute("style", "position: absolute");
circle.setAttribute('cx','mouseX');
circle.setAttribute('cy','mouseY');
circle.setAttribute('r','40');
circle.setAttribute('fill','white');
svg.appendChild(circle);
body.appendChild(svg);
}

