/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }  


  dateFuture = new Date(1999,7,19,23,59,59);
        
  function GetCount(){
  
          dateNow = new Date();
          //grab current date
          amount =  dateNow.getTime() - dateFuture.getTime();                
          //calc milliseconds between dates
          delete dateNow;
  
          // time is already past
          if(amount < 0){
                  document.getElementById('daybox').innerHTML="Now!";
          }
          // date is still good
          else{
              
                  days=0;hours=0;mins=0;secs=0;out="";
  
                  amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs
  
                  days=Math.floor(amount/86400);//days
                  amount=amount%86400;
  
                  hours=Math.floor(amount/3600);//hours
                  amount=amount%3600;
  
                  mins=Math.floor(amount/60);//minutes
                  amount=amount%60;
  
                  secs=Math.floor(amount);//seconds
  
                  if(days != 0){out += days +" dag"+((days!=1)?"e":"")+", ";}
                  if(days != 0 || hours != 0){out += hours +" time"+((hours!=1)?"r":"")+", ";}
                  if(days != 0 || hours != 0 || mins != 0){out += mins +" minut"+((mins!=1)?"ter":"");}
                  document.getElementById('daybox').innerHTML=out;
  
                  setTimeout("GetCount()", 1000);
          }
  }
  
  window.onload=function(){GetCount();}//call when everything has loaded