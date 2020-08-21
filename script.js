function duplicate(id){
    let workArea = document.getElementById("draw");    
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");       
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#'+id );
    if(id==="host123"){
        svg.setAttributeNS(null,"viewBox","50 -50 150 250");
    }
    else{
        svg.setAttributeNS(null,"viewBox","0 0 150 150");
    } 
    svg.appendChild(use);    
    workArea.appendChild(svg);  
    svg.classList.add("icon");
    Draggable.create(".icon",{
        bounds: "#draw"
    }); 
    }




    

    

        