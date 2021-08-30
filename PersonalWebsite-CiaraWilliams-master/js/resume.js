document.getElementById("btn1").addEventListener("click", goToLinkedIn, { signal: controller.signal });

document.getElementsById("btn1").addEventListener("mouseover", ChangeColor, { signal: controller.signal }); 


function ChangeColor() {  
          document.getElementById('btn1').style.backgroundColor='Red';
          setTimeout("ChangeColor2()", 900);    
     } 

function ChangeColor2() {  
    document.getElementById('btn1').style.backgroundColor='Green';    
} 

function goToLinkedIn(){
    parent.open('https://www.linkedin.com/in/ciara-williams-043886126');
}