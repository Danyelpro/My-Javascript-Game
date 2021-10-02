document.getElementById("dino").addEventListener("click", function()
 {    document.getElementById("dino").style.marginTop = '-200px';
 
 setTimeout(() => {
     document.getElementById("dino").style.marginTop = '0';

 } , 800)
  });