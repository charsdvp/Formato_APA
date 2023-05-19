// Importamos las validaciones
import validationEmptyFields from "./validations.js"

export default function getDataFormThesis(){        
  // capturamos los campos requeridos
   const lastNameThesis = document.getElementById('lastname-author-thesis')
   const initialsAuthorThesis = document.getElementById('initials-author-thesis')
   const yearPublicationThesis = document.getElementById('year-publication-thesis')
   const titleThesis = document.getElementById('title-thesis')
   const typeThesis = document.getElementById('type-thesis')
   const nameInstitutionThesis = document.getElementById('name-intitution-thesis')   
   const ubicationInstitutionThesis = document.getElementById('ubication-intitution-thesis')
   // Capturamos e contenedor ejemplo
   const exampleThesis = document.querySelector('.example-thesis')
   // Aqui guardaremos los campos que deberan ser requeridos obligatoriamente    
   const arrayThesis = [
     lastNameThesis,    
     initialsAuthorThesis,
     yearPublicationThesis,
     titleThesis,
     typeThesis,
     nameInstitutionThesis,
     ubicationInstitutionThesis
   ]
   // Si los campos estan vacios - primera validacion    
    if(validationEmptyFields(arrayThesis) == false) return
   // Si no hay errores el formato se completa
   //Smith, J. A. (2019). The Impact of Social Media on Adolescent Mental Health: A Comparative Study (Tesis de doctorado). Universidad de California, Los Ángeles.
    exampleThesis.textContent = `${lastNameThesis.value}, ${initialsAuthorThesis.value} (${yearPublicationThesis.value}). ${titleThesis.value} (Tesis de ${typeThesis.value}). ${nameInstitutionThesis.value}, ${ubicationInstitutionThesis.value}`
 }
