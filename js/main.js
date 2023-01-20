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
    getShortLink(linkInputBox)
    document.querySelector('.input-link-input').value = ""
  }
}
// 
//
// FETCH API FUNCTION CODE
// 
async function getShortLink(shortedLink) {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${shortedLink}`);
  const data = await response.json();
  if (response.ok) {
    linksGenerated += `
    
      <div class="linkGenerated">
        <div class="longLink"><a ${linkInputBox}" class="long-link">${linkInputBox}</a></div>
        <div class="shortLink">
          <div class="short-link"><a ${data.original_link}" class="short--link">${data.full_short_link}</a></div>
          <button class="copy-btn">Copy</button>
        </div>
      </div>
    
    `
  }
}