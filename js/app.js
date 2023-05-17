// Creamos las variables necesarias para manipular el contenedorFormularioBook
const containerData = document.querySelector('.contenedor-formatos-data')

const bookItem = document.getElementById('bookItem')
const journalItem = document.getElementById('journalItem')
const webItem = document.getElementById('webItem')
const thesisItem = document.getElementById('thesisItem')
const newsItem = document.getElementById('newsItem')
const audiovisualItem = document.getElementById('audiovisualItem')

const formBook = document.querySelector('.contenedor-datos-libro')
const formJournal = document.querySelector('.contenedor-datos-revista')
const formWeb = document.querySelector('.contenedor-datos-web')
const formThesis = document.querySelector('.contenedor-datos-tesis')
const formNews = document.querySelector('.contenedor-datos-periodico')
const formsResourceA = document.querySelector('.contenedor-datos-recursoA')

const btnCita = document.querySelector('.btn-cita')

formBook.style.display = 'none'
formJournal.style.display = 'none'
formWeb.style.display = 'none'
formThesis.style.display = 'none'
formNews.style.display = 'none'
formsResourceA.style.display = 'none'
btnCita.style.display = 'none'

document.addEventListener('click', ( e ) => {
  // if(!containerData.contains(e.target)){
  //   formBook.style.display = 'none'
  //   formJournal.style.display = 'none'
  //   formWeb.style.display = 'none'
  //   btnCita.style.display = 'none'
  // }
  if( bookItem.contains(e.target) ){    
    formBook.style.display = 'block'
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNews.style.display = 'none'
    formsResourceA.style.display = 'none'
    btnCita.style.display = 'block'
  }
  if( journalItem.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'block'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNews.style.display = 'none'
    formsResourceA.style.display = 'none'
    btnCita.style.display = 'block'
  }
  if( webItem.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'block'
    formThesis.style.display = 'none'
    formNews.style.display = 'none'
    formsResourceA.style.display = 'none'
    btnCita.style.display = 'block'
  }
  if( thesisItem.contains(e.target)){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'block'
    formNews.style.display = 'none'
    formsResourceA.style.display = 'none'
    btnCita.style.display = 'block'
  }
  if( newsItem.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNews.style.display = 'block'
    formsResourceA.style.display = 'none'
    btnCita.style.display = 'block'
  }
  if( audiovisualItem.contains(e.target) ){
    formBook.style.display = 'none'
    formJournal.style.display = 'none'
    formWeb.style.display = 'none'
    formThesis.style.display = 'none'
    formNews.style.display = 'none'
    formsResourceA.style.display = 'block'
    btnCita.style.display = 'block'
  }
  if( btnCita.contains(e.target) ){
    getDataFormBook();
    getDataJournal();
    getDataWeb();
    getDataThesis();
    getDataNews();
    getDataResourceA();
  }
})
function getDataFormBook(){
  const exampleBook = document.querySelector('.ejemplo-libro')

  const authorName = document.getElementById('apellido-autor').value
  const authorInitials = document.getElementById('iniciales-autor').value
  const publicationYear = document.getElementById('year-publicacion').value
  const bookTitle = document.getElementById('titulo-libro').value
  const numPages = document.getElementById('num-paginas').value
  const placePublication = document.getElementById('lugar-publicacion').value
  const placeStatePublication = document.getElementById('lugar-edo-publicacion').value
  const publisherName = document.getElementById('nombre-editorial').value

  // Johnson, A. B. (2017). Historia del arte moderno (pp. 50-75). Londres, Reino Unido: Editorial ABC.

  exampleBook.textContent = `${authorName}, ${authorInitials} (${publicationYear}). ${bookTitle} (pp. ${numPages}), ${placePublication}, ${placeStatePublication}: ${publisherName}`
}
function getDataJournal(){
  const exampleJournal = document.querySelector('.ejemplo-revista')

  const authorName = document.getElementById('apellido-autor-revista').value
  const authorInitials = document.getElementById('iniciales-autor-revista').value
  const publicationYear = document.getElementById('year-publicacion-revista').value
  const articleTitle = document.getElementById('titulo-articulo').value
  const journalTitle = document.getElementById('titulo-revista').value
  const volJournal = document.getElementById('volumen-revista').value
  // const journalEdition = document.getElementById('edicion-revista').value
  const articlePages = document.getElementById('paginas-articulo').value
  const DOI = document.getElementById('DOI').value
  //
  exampleJournal.textContent = `${authorName}, ${authorInitials} (${publicationYear}). ${articleTitle}. ${journalTitle}, ${volJournal}, ${articlePages}. ${DOI}`
}

function getDataWeb(){
  const exampleWeb = document.querySelector('.ejemplo-web')

  const authorName = document.getElementById('apellido-autor-web').value
  const authorInitials = document.getElementById('iniciales-autor-web').value
  const publicationYear = document.getElementById('year-publicacion-web').value
  const articleTitle = document.getElementById('titulo-pagina').value
  const webTitle = document.getElementById('titulo-web').value
  const pageUrl = document.getElementById('pagina-url').value
  
  exampleWeb.textContent = `${authorName}, ${authorInitials} (${publicationYear}). ${articleTitle}. ${webTitle}. Recuperado de ${pageUrl}`
}


function getDataThesis(){
  const exampleThesis = document.querySelector('.ejemplo-tesis')

  const authorName = document.getElementById('apellido-autor-web').value
  const authorInitials = document.getElementById('iniciales-autor-web').value
  const publicationYear = document.getElementById('year-publicacion-web').value
  const thesisTitle = document.getElementById('titulo-tesis').value
  const typeThesis = document.getElementById('tipo-tesis').value
  const institutionThesis = document.getElementById('institucion-tesis').value
  const ubicationInst = document.getElementById('ubicacion-institucion').value

  exampleThesis.textContent = `${authorName}, ${authorInitials} (${publicationYear}). ${thesisTitle}. (Tesis de ${typeThesis}). ${institutionThesis}, ${ubicationInst}`
}

function getDataNews(){
  const exampleNews = document.querySelector('.ejemplo-periodico')

  const authorName = document.getElementById('apellido-autor-periodico').value
  const authorInitials = document.getElementById('iniciales-autor-periodico').value
  const publicationYear = document.getElementById('year-publicacion-periodico').value
  const newsArticleTitle = document.getElementById('titulo-articulo-periodico').value
  const nameNews = document.getElementById('name-periodico').value
  const pagesNews = document.getElementById('paginas-periodico').value
  const urlNews = document.getElementById('url-periodico').value

  exampleNews.textContent = `${authorName}, ${authorInitials} (${publicationYear}). ${newsArticleTitle}. ${nameNews}. p. ${pagesNews}. Recuperado de ${urlNews}`
}

function getDataResourceA(){
  const exampleResourceA = document.querySelector('.ejemplo-resourceA')

  const authorName = document.getElementById('autor-video').value  
  const publicationYear = document.getElementById('fecha-video').value
  const videoTitle = document.getElementById('titulo-video').value
  const nameWeb = document.getElementById('nombre-sitio-web').value
  const urlWebVideo = document.getElementById('url-video').value
//PewDiePie. (2018, Octubre 17). I hate this game because I suck at it [Video]. YouTube. Recuperado de 
  exampleResourceA.textContent = `${authorName}. (${publicationYear}). ${videoTitle}. ${nameWeb}. Recuperado de ${urlWebVideo}`
}