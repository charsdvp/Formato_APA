 // Para validar si hay campos vacios
 export function validationEmptyFields(arrayFields) {
  for (let i = 0; i < arrayFields.length; i++) {
    if (arrayFields[i].value === '') {
      //console.log('Hay campos vacíos');
      arrayFields[i].focus();
      return false;
    }
  }
  return true;
}
// Para validar lasinciales en un formato "A. C."
export function formatFullName(fullName) {
  let initials = fullName.split(" ").map(name => name.charAt(0).toUpperCase() + ".");
  return initials.join(" ");
}