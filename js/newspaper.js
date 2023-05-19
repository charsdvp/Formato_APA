// Importamos las validaciones
import { validationEmptyFields, formatFullName } from "./validations.js";

export default function getDataFormNewsPaper() {
  // capturamos los campos requeridos
  const lastNameNewsPaper = document.getElementById(
    "lastname-author-newspaper"
  );
  const initialsAuthorNewsPaper = document.getElementById(
    "initials-author-newspaper"
  );
  const datePublicationNewsPaper = document.getElementById(
    "date-publication-newspaper"
  );
  const titleArticleNewsPaper = document.getElementById(
    "title-article-newspaper"
  );
  const nameNewsPaper = document.getElementById("name-newspaper");
  const pagesNewsPaper = document.getElementById("pages-newspaper");
  // Capturamos e contenedor ejemplo
  const exampleNewsPaper = document.querySelector(".example-newspaper");
  // Aqui guardaremos los campos que deberan ser requeridos obligatoriamente
  const arrayNewsPaper = [
    lastNameNewsPaper,
    initialsAuthorNewsPaper,
    datePublicationNewsPaper,
    titleArticleNewsPaper,
    nameNewsPaper,
    pagesNewsPaper,
  ];
  // Si los campos estan vacios - primera validacion
  if (validationEmptyFields(arrayNewsPaper) == false) return;
  // Si no hay errores el formato se completa
  // Smith, J. A. (2022, 10 de mayo). Avances en la lucha contra el cambio climático. El Periódico, pp. A1, A4.
  // Formateamos iniciales
  const initialsFormated = formatFullName(initialsAuthorNewsPaper.value); // ( X. X. )
  exampleNewsPaper.textContent = `${lastNameNewsPaper.value}, ${initialsFormated} (${datePublicationNewsPaper.value}). ${titleArticleNewsPaper.value}. ${nameNewsPaper.value}, pp. ${pagesNewsPaper.value}.`;
}
