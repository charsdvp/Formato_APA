// Importamos las validaciones
import { validationEmptyFields, formatFullName } from "./validations.js";

export default function getDataFormBook() {
  // capturamos los campos requeridos
  const lastNameBook = document.getElementById("lastName-author-book");
  const initialsAuthorBook = document.getElementById("initials-author-book");
  const yearPublicationBook = document.getElementById("year-publication-book");
  const titleBook = document.getElementById("title-book");
  const numPagesBook = document.getElementById("num-pages-book");
  const placePublicationBook = document.getElementById(
    "place-publication-book"
  );
  const statePublicationBook = document.getElementById(
    "state-publication-book"
  );
  const namePublisherBook = document.getElementById("name-publisher-book");
  // Capturamos e contenedor ejemplo
  const exampleBook = document.querySelector(".example-book");
  // Aqui guardaremos los campos que deberan ser requeridos obligatoriamente
  const arrayBook = [
    lastNameBook,
    initialsAuthorBook,
    yearPublicationBook,
    titleBook,
    numPagesBook,
    placePublicationBook,
    statePublicationBook,
    namePublisherBook,
  ];
  // Si los campos estan vacios - primera validacion
  if (validationEmptyFields(arrayBook) == false) return;
  // Si no hay errores el formato se completa
  // Johnson, A. B. (2017). Historia del arte moderno (pp. 50-75). Londres, Reino Unido: Editorial ABC.
  // Formateamos iniciales
  const initialsFormated = formatFullName(initialsAuthorBook.value); // ( X. X. )
  exampleBook.textContent = `${lastNameBook.value}, ${initialsFormated} (${yearPublicationBook.value}). ${titleBook.value} (pp. ${numPagesBook.value}). ${placePublicationBook.value}, ${statePublicationBook.value}: ${namePublisherBook.value}`;
}
