var nom = document.getElementById('Nom').value;
var prenom = document.getElementById('Prenom').value;
var mail = document.getElementById('Mail').value;
var tel = document.getElementById('Tel').value;

var champs = document.querySelectorAll('input');
document.getElementById('valid').addEventListener('click', function (even){
    controle(champs);



});
function controle(champs){
    champs.forEach(function(element) {
        
        
        var elem = element.value;
        if ((elem.trim() != '') && (isNaN(elem))){
            if (element.id == 'Mail'){
                if (ValidateEmail(elem)){
                    element.style.borderColor='Green';
                }
                else{
                    element.style.borderColor='Red';
                }
            }
            else{
                element.style.borderColor='Green';
            }
            console.log('>'+elem);
        }
        else{
            if (element.id='Tel'){
                element.style.borderColor='Green';
            }
            else{
                element.style.borderColor='Red';
            }
            
            console.log(elem);
        }

        
    });

}


  function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      
      return (false)
  }