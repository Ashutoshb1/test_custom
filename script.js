Draggable.create(".icon");


function duplicate(){
    let dp = document.getElementById("draw");
    let btn = document.createElement("button");
    let drop = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#shape3');
    use.setAttributeNS(null,"x","0");
    use.setAttributeNS(null,"y","0");
    drop.appendChild(use);
    console.log(drop);
    btn.appendChild(drop);
    dp.appendChild(btn);
    
    btn.classList.add("icon");
    btn.style.transform = translate3d(150,150,0);
    Draggable.create(".icon");
    
    console.log("called");
    }


    function duplicateSwitch(){
        let dp = document.getElementById("draw");
        //let btn = document.createElement("button");
        let drop = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        let parent = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#switch12');
        
        drop.appendChild(use);
        //console.log(drop);
        //btn.appendChild(drop);
        parent.appendChild(drop);
        dp.appendChild(parent);

        parent.setAttributeNS(null,"x","150");
        parent.setAttributeNS(null,"y","150");
        //let t = "translate3d(150px,150px,0)";
        //btn.style.transform = "matrix(1.5, 0, 0, 1.5, 300-1.5*300, 300-1.5*300)";
        parent.classList.add("icon");
        Draggable.create(".icon");
        console.log("called");
        }    

        function duplicateRou(){
            let dp = document.getElementById("draw");
            //let btn = document.createElement("button");
            let drop = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
            drop.setAttributeNS(null,"viewBox","0 0 150 150");
            use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#svg13653');
            
            drop.appendChild(use);
            //console.log(drop);
            //btn.appendChild(drop);
            dp.appendChild(drop);
            drop.classList.add("icon");
            Draggable.create(".icon");
            console.log("called");
            }        

            function duplicateHost(){
                let dp = document.getElementById("draw");
                //let btn = document.createElement("button");
                let drop = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
                //drop.setAttributeNS(null,"preserveAspectRatio","none");
                drop.setAttributeNS(null,"viewBox","50 -50 150 250");
                use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#host123');
                
                drop.appendChild(use);
                //console.log(drop);
                //btn.appendChild(drop);
                dp.appendChild(drop);
                drop.classList.add("icon");
                Draggable.create(".icon");
                console.log("called");
                }     

        function drawLine(){
            let d = document.getElementById("draw");
            console.log("called");
            d.addEventListener("dblclick",()=>{
                console.log("called");
                new LeaderLine(
                    document.getElementById('switch12'),
                    document.getElementById('host123')
                  );
            });
        }        