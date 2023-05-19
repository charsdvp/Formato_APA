import getDataFormBook from "./book.js";
import getDataFormJournal from "./journal.js";
import getDataFormWeb from "./website.js";
import getDataFormThesis from "./thesis.js";
import getDataFormNewsPaper from "./newspaper.js";
import getDataFormAudioVisualResource from "./audioVisualResource.js";

document.addEventListener('click', (e) => {
  // Creamos las variables que almacenaran los items de los formatos apa
  const book = document.getElementById('book');
  const journal = document.getElementById('journal');
  const website = document.getElementById('website');
  const thesis = document.getElementById('thesis')
  const newspaper = document.getElementById('newspaper')
  const audiovisualResource = document.getElementById('audiovisual-resource')
  // Creamos variables que almacenaran los contenedores de los formularios
  const formBook = document.querySelector('.container-header-form-book')
  const formJournal = document.querySelector('.container-header-form-journal')
  const formWeb = document.querySelector('.container-header-form-web')
  const formThesis = document.querySelector('.container-header-form-thesis')
  const formNewsPaper = document.querySelector('.container-header-form-newspaper')
  const formAudiovisualResource = document.querySelector('.container-header-form-audiovisual-resource')

  if( book.contains(e.target) ){
    formBook.style.display = 'block'  
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNewsPaper.style.display = 'none'
    formAudiovisualResource.style.display = 'none'
    formBook.scrollIntoView({ behavior: 'smooth'})
  }
  if( journal.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'block'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNewsPaper.style.display = 'none'
    formAudiovisualResource.style.display = 'none'

    formJournal.scrollIntoView({ behavior: 'smooth'})
  }
  if( website.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'block'
    formThesis.style.display = 'none'
    formNewsPaper.style.display = 'none'
    formAudiovisualResource.style.display = 'none'
    formWeb.scrollIntoView({ behavior: 'smooth'})
  }
  if( thesis.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'block'
    formNewsPaper.style.display = 'none'
    formAudiovisualResource.style.display = 'none'
    formThesis.scrollIntoView({ behavior: 'smooth'})
  }
  if( newspaper.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNewsPaper.style.display = 'block'
    formAudiovisualResource.style.display = 'none'
    formNewsPaper.scrollIntoView({ behavior: 'smooth'})
  }
  if(audiovisualResource.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNewsPaper.style.display = 'none'
    formAudiovisualResource.style.display = 'block'
    formAudiovisualResource.scrollIntoView({ behavior: 'smooth'})
  }
  // Capturamos los botones para crear la cita dependiento del formato
  const btnGenerateBook = document.getElementById('btn-book')
  const btnGenerateJournal = document.getElementById('btn-journal')
  const btnGenerateWeb = document.getElementById('btn-web')
  const btnGenerateThesis = document.getElementById('btn-thesis')
  const btnGenerateNewsPaper = document.getElementById('btn-newspaper')
  const btnGenerateAudioVisualResource = document.getElementById('btn-audiovisual-resource')
  
  if(btnGenerateBook.contains(e.target)){
      getDataFormBook()
  }
  if(btnGenerateJournal.contains(e.target)){
    getDataFormJournal()
  }
  if(btnGenerateWeb.contains(e.target)){
    getDataFormWeb()
  }  
  if(btnGenerateThesis.contains(e.target)){
    getDataFormThesis()
  }
  if(btnGenerateNewsPaper.contains(e.target)){
    getDataFormNewsPaper()
  }
  if(btnGenerateAudioVisualResource.contains(e.target)){
    getDataFormAudioVisualResource()
  }
})
