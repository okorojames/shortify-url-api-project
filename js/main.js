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
    linksGenerated.innerHTML += `
    
      <div class="linkGenerated">
        <div class="longLink"><a href="${data.result.original_link}" target="_blank" class="long-link">${data.result.original_link}</a></div>
        <div class="shortLink">
          <div class="short-link"><a href="${data.result.original_link}" target="_blank" class="short--link">${data.result.full_short_link}</a></div>
          <button class="copy-btn">Copy</button>
        </div>
      </div>
    
    `
  }
}
//
// 
linksGenerated.addEventListener("click", (e) => {
  if (e.target.classList.contains('copy-btn')) {
    navigator.clipboard.writeText(document.querySelector(".short--link").textContent);
    document.querySelector('.copy-btn').style.backgroundColor = 'rgb(59, 48, 84)';
    document.querySelector('.copy-btn').textContent = 'Copied!';
  }
})
//
// NAV HAMBURGER
// 
const hamburger = document.querySelector('.hamburger')
const burgers = document.querySelectorAll('.burger')
const navLinksBtn = document.querySelector('.navLinksBtns')
const navLink = document.querySelectorAll('.nav-link')
hamburger.addEventListener('click', () => {
  burgers.forEach(burger => {
    burger.classList.toggle('toggle-burger')
  })
  navLinksBtn.classList.toggle('toggle-burger')
})
navLink.forEach(navlink => {
  navlink.addEventListener('click', () => {
    navLinksBtn.classList.remove('toggle-burger')
    burgers.forEach(burger => {
      burger.classList.remove('toggle-burger')
    })
  })
})