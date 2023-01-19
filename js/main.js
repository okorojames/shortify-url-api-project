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
  if (linkInputBox === '' || linkInputBox !== linkInputBox.match(urlRegex)) {
    linkInputBox.style.border = "2px solid red";
  } else {
    console.log(linkInputBox)
  }
}
// 
//
// FETCH API FUNCTION CODE
// 
