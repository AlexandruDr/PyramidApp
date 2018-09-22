function printPyramid(height) {
     
   for ( var i = 0; i < height; i++)
        {   
            for ( var j = i; j < height-1; j++)
                {
                    
                    var x = document.createElement("div");
            x.innerHTML = '';
            x.classList.add("select");
            document.getElementById("pyramid").appendChild(x);
                }
            
            for ( var t = 0; t<=i; t++)
                {
                    var y = document.createElement("div");
            y.innerHTML = '';
            y.classList.add("select1");
            document.getElementById("pyramid").appendChild(y);
                }
            

            var sep = document.createElement("div");
            document.getElementById("pyramid").appendChild(sep);
            
        }
    document.getElementById("construction").innerHTML = '';
    
    }
printPyramid(7); 

var slider = document.getElementById("myRange");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.onchange = function () {document.getElementById("pyramid").innerHTML = ''; printPyramid(slider.value);};
