 // Validaciones
 export default function validationEmptyFields(arrayFields) {
  for (let i = 0; i < arrayFields.length; i++) {
    if (arrayFields[i].value === '') {
      //console.log('Hay campos vacíos');
      arrayFields[i].focus();
      return false;
    }
  }
  return true;
}