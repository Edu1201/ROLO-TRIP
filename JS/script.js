let currentLang = "es"

const btn = document.getElementById("language-btn")

btn.addEventListener("click", () => {

const elements = document.querySelectorAll("[data-es]")

if(currentLang === "es"){

elements.forEach(el=>{
el.textContent = el.getAttribute("data-en")
})

btn.textContent = "ES"
currentLang = "en"

}else{

elements.forEach(el=>{
el.textContent = el.getAttribute("data-es")
})

btn.textContent = "EN"
currentLang = "es"

}

})