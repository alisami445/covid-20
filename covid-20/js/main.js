//fonction alphanumerique pour verife tout les lettres sauf lettres speciaux
const alphanumerique = txt =>{
    var numberletter= /^[0-9a-zA-Z]+$/;//tout les caractreres sauf les caractere spéciaux
    var check = txt.match(numberletter)//pour verife que le text donner par utilisateur dans numberletter
    if(check){return true}else{return false}
}
//---------------------------------------------------------------------------------
//fonction alphabetique pour verife les lettre alphabetique
const alphabetique = txt =>{
    var letter=/^[A-Za-z]+$/;//tout les alphabes [A .. Z] et [a..z] cette fonction appelle Regexp
    var check = txt.match(letter)//pour verife que le text donner par utilisateur dans letter de [A .. Z] et [a..z]
    if(check){return true}else{return false}
}
//---------------------------------------------------------------------------------
//function verif pour verife les information personnel et le score 
function verif(){
    //pour renvoie un objet représentant l'élément dont la propriété id dans HTML
    var Nom     = document.getElementById("nom").value    ;
    var Prenom  = document.getElementById("prenom").value ;
    var datee   = document.getElementById("date").value   ;
    var Adresse = document.getElementById("adresse").value;
    var Numero  = document.getElementById("numero").value ;
    var Email   = document.getElementById("email").value  ;
    //------------------------------------
    //verif nom
    if (alphabetique(Nom)==false || Nom.length <= 3) {alert("il Faut un nom alphabetique et de taille minimale égale à 3 s-il vous plait");return false;}

    //verif Prenom
    if (alphabetique(Prenom)==false || Prenom.length <= 3) {alert("il Faut un Prenom alphabetique et de taille minimale égale à 3 s-il vous plait");return false;}
    //verif Adresse
    if (Adresse.length<=10){alert("il faut une Adresse de taille minimale égale à 10 s-il vous plait ");return false;}
    //verif date
    let Bdate = document.getElementById("date").value;
    let Bday = +new Date(Bdate);
    let age = Math.round((Date.now() - Bday) / 31557600000);
    if (Bdate == ""){alert("verifier vote date de naissance");return false;}
    //verif numero
    if (Numero.toString().length != 8 || parseInt(Numero[0])< 2){
        alert("il faut numero de 8 chiffres dont le premier est supérieur à 1 s-il vous plait ")
        return false
    }
     //verif email  
     var letterNumber    = /^[0-9a-zA-Z]+$/;//tout les caractreres sauf les caractere spéciaux
     var premierPartie   = Email.slice(0,Email.indexOf("@"));//premiere partie de email de 0 a @
     var deuxiemePartie  = Email.slice(Email.indexOf("@") + 1,Email.lastIndexOf("."));//deuxieme partie de email de @ a .
     var troisiemePartie = Email.slice(Email.lastIndexOf(".") + 1,Email.length - 1);//troixieme partie de email de . jusqua la fin
     if (Email.length > 50 || premierPartie.match(letterNumber)==false || deuxiemePartie.match(letterNumber)==false || premierPartie.length <= 3 || deuxiemePartie.length <= 3 ||  troisiemePartie.length < 2 ||troisiemePartie.length > 4 ){alert("il faut taille ne dépasse pas 50 caractères et ayant le format : ch1@ch2.ch3 /n ch1 et ch2 sont deux chaînes alphanumériques, chacune de longueur supérieure ou égale à 3 /n ch3 est une chaîne de 2 à 4 lettres");return false;}
    //---------------------------------------------------------------------------------------------------------
    //calcul  score
    //pour renvoie un objet représentant l'élément dont la propriété id dans HTML
    //-------------------------------------------------------   
    //var fatigoui  = document.getElementById("fatigueoui")    ;
    //var regulioui = document.getElementById("regulieroui")   ;
    //var gouteroui = document.getElementById("gouteroui")     ;
    //var gorgeoui  = document.getElementById("gorgeoui")      ;
    var tempoui   = document.getElementById("temperateuroui");
    var sechoui   = document.getElementById("sechoui")       ;
    var mauxoui   = document.getElementById("mauxoui")       ;
    var ouipt     =document.querySelectorAll("#ouipt")       ;
    var ouiha     = document.querySelectorAll("#ouiha")      ;// Element renvoie une NodeList statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés
    //------------------------------------
    let calc = 0 ;//le score de client pour diagnostic le statut de client
    //if (fatigoui.checked) {calc+=2} ;
    //if (regulioui.checked){calc+=2} ;
    //if (gouteroui.checked){calc+=2} ;
    //if (gorgeoui.checked) {calc+=2} ;
    //------------------------------
    
    if (tempoui.checked)  {calc+=3} ;
    if (sechoui.checked)  {calc+=3} ;
    if (mauxoui.checked)  {calc+=1} ;
    for (let i = 0; i < ouiha.length; i++){
        if (ouiha[i].checked){calc+=5;}
    }
    for(let i = 0 ; i< ouipt.length;i++){
        if(ouipt[i].checked){calc+=2;}
    }
    let M = false;
    let ck=document.querySelectorAll("ck")
    let ls =window.localStorage
    ls.clear()
    for (let i = 0; i < ck.length; i++) {
        if (ck.checked) {
            M = true;
        }
    }
      
    if (calc < 7 && age < 65) {
        ls.setItem('msg',"Vous devirez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières.")
      } else if (calc < 7 && age < 65) {
        ls.setItem('msg',"Vous devirez aller bien, mais vous devriez rester confiné chez vous.")
      }
    if (calc >= 7 && calc <= 18 && M == false) {
        ls.setItem('msg',"Vous avez des majeurs symptômes du COVID-19. Vous devriez vous confiner au plus vite, et faire un test de dépistage")
      } else if (calc > 7 && calc < 18 && M == true) {
        ls.setItem('msg',"Précipitez-vous au centre COVID le plus proche pour être pris en charge.")
      }
      if (calc > 18) {
        ls.setItem('msg',"Précipitez-vous au centre COVID le plus proche pour être pris en charge.")
      }
      ls.setItem('nom',Nom)
      ls.setItem('prenom',Prenom)
      ls.setItem('age',datee)
      ls.setItem('adresse',Adresse)
      ls.setItem('numero',Numero)
      ls.setItem('email',Email)
};
