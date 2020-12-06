/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }  


  setInterval(function(){
    var value = parseInt(document.getElementById('counter').innerHTML);
    document.getElementById('counter').innerHTML = (value+1).toString();
},864); //86400000 = 1 day in milliseconds

var btn = document.getElementById('reset');
btn.onclick=function(){
    document.getElementById('counter').innerHTML = "0";
};