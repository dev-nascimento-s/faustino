let cont = 1;
setInterval(  function(){
   document.getElementById('radio'+ cont).checked = true;
   document.querySelectorAll('.slaid' + cont).style.display ='block';
   for(let i = 1; i<=5;i++){
    if(i !== cont){
        document.querySelectorAll('.slaid' + cont).style.display ='nome';
    }
   }
   cont ++;

   if(cont > 5){
    cont = 1;
   }
},3000);