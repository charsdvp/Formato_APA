// Importamos las validaciones
import { validationEmptyFields, formatFullName } from "./validations.js";

export default function getDataFormJournal() {
  // capturamos los campos requeridos
  const lastNameJournal = document.getElementById("lastName-author-journal");
  const initialsAuthorJournal = document.getElementById(
    "initials-author-journal"
  );
  const yearPublicationJournal = document.getElementById(
    "year-publication-journal"
  );
  const titleArticleJournal = document.getElementById("title-article-journal");
  const nameJournal = document.getElementById("name-journal");
  const volJournal = document.getElementById("vol-journal");
  const pagesJournal = document.getElementById("pages-journal");
  const urlJournal = document.getElementById("url-journal");
  // Capturamos e contenedor ejemplo
  const exampleJournal = document.querySelector(".example-journal");
  // Aqui guardaremos los campos que deberan ser requeridos obligatoriamente
  const arrayJournal = [
    lastNameJournal,
    initialsAuthorJournal,
    yearPublicationJournal,
    titleArticleJournal,
    nameJournal,
    pagesJournal,
  ];
  // Si los campos estan vacios - primera validacion
  if (validationEmptyFields(arrayJournal) == false) return;
  // Si no hay errores el formato se completa
  // Smith, J. (2022). The Importance of Renewable Energy. Environmental Studies Review, 15(3), 45-60. doi:10.1234/123456789
  // Le damos formato a las iniciales
  const initialsFormated = formatFullName(initialsAuthorJournal.value); // ( X. X. )

  exampleJournal.textContent = `${lastNameJournal.value}, ${initialsFormated} (${yearPublicationJournal.value}). ${titleArticleJournal.value}. ${nameJournal.value}, ${volJournal.value}, ${pagesJournal.value}. Recuperado de ${urlJournal.value} `;
}
