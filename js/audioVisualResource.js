// Importamos las validaciones
import validationEmptyFields from "./validations.js"

export default function getDataFormAudioVisualResource(){        
  // capturamos los campos requeridos
   const lastNameAudioVisual = document.getElementById('lastname-author-audiovisual-resource')
   const initialsAuthorAudioVisual = document.getElementById('initials-author-audiovisual-resource')
   const datePublicationAudioVisual = document.getElementById('date-publication-audiovisual-resource')
   const titleAudioVisual = document.getElementById('title-audiovisual-resource')
   const formatAudioVisual = document.getElementById('format-audiovisual-resource')
   const urlAudioVisual = document.getElementById('url-audiovisual-resource')   
   // Capturamos e contenedor ejemplo
   const exampleAudioVisual = document.querySelector('.example-audiovisual-resource')
   // Aqui guardaremos los campos que deberan ser requeridos obligatoriamente    
   const arrayAudioVisual = [
     lastNameAudioVisual,
     datePublicationAudioVisual,
     titleAudioVisual,
     formatAudioVisual,
     urlAudioVisual
   ]
   // Si los campos estan vacios - primera validacion    
    if(validationEmptyFields(arrayAudioVisual) == false) return
   // Si no hay errores el formato se completa
   //Smith, J. (2022, 15 de abril). Cómo meditar para reducir el estrés [Video]. Recuperado de https://www.youtube.com/watch?v=xxxxxxxxxxx
 
    exampleAudioVisual.textContent = `${lastNameAudioVisual.value}, ${initialsAuthorAudioVisual.value} (${datePublicationAudioVisual.value}). ${titleAudioVisual.value} [${formatAudioVisual.value}]. Recuperado de ${urlAudioVisual.value}.`
 }
