const linkForm = document.querySelector('.input-link-form');
const linksGenerated = document.querySelector('.linksGenerated');
//
// SUBMIT FUNCTION
// 
linkForm.addEventListener('submit', onSubmitLink)
//
// INPUT FUNCTION CODE
// 
function onSubmitLink(e) {
  e.preventDefault();
  //
  // VARIABLES IN FUNCTION
  // 
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const linkInputBox = document.querySelector('.input-link-input').value.trim();
  // 
  if (!linkInputBox.match(urlRegex) || linkInputBox === "") {
    alert('not a valid link')
    document.querySelector('.input-link-input').value = ""
  } else {
    console.log(linkInputBox)
    document.querySelector('.input-link-input').value = ""
  }
}
// 
//
// FETCH API FUNCTION CODE
// 
