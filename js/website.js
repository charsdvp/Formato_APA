// Importamos las validaciones
import { validationEmptyFields, formatFullName } from "./validations.js";

export default function getDataFormWeb() {
  // capturamos los campos requeridos
  const authorWeb = document.getElementById("author-web");
  const initialsAuthorWeb = document.getElementById("initials-author-web");
  const yearPublicationWeb = document.getElementById("year-publication-web");
  const titleArticleWeb = document.getElementById("title-article-web");
  const nameWeb = document.getElementById("name-web");
  const urlWeb = document.getElementById("url-web");
  // Capturamos e contenedor ejemplo
  const exampleWeb = document.querySelector(".example-web");
  // Aqui guardaremos los campos que deberan ser requeridos obligatoriamente
  const arrayWeb = [
    authorWeb,
    yearPublicationWeb,
    titleArticleWeb,
    nameWeb,
    urlWeb,
  ];
  // Si los campos estan vacios - primera validacion
  if (validationEmptyFields(arrayWeb) == false) return;
  // Si no hay errores el formato se completa
  // Moret, D. (7 de octubre de 2019). 7 consejos para pedir una hipoteca. Rastreator. Recuperado de https://www.rastreator.
  // Formateamos iniciales
  const initialsFormated = formatFullName(initialsAuthorWeb.value); // ( X. X. )
  exampleWeb.textContent = `${authorWeb.value}, ${initialsFormated} (${yearPublicationWeb.value}). ${titleArticleWeb.value}. ${nameWeb.value}. Recuperado de ${urlWeb.value}`;
}
