const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// let phonealert = document.querySelector('.phonealert')
// let mailalert = document.querySelector('.mailalert')
// function copyphone(){
//   navigator.clipboard.writeText("+7 XXX XXX XXX")
//   console.log("СКОПИРОВАН НОМЕР ТЕЛЕФОНА");
// }
// function copymail(){
//     navigator.clipboard.writeText("alexandrkalinkin@mail.ru")
//     console.log("СКОПИРОВАН ЭЛЕКТРОННЫЙ АДРЕСС");
//   }
// function closealertphone(){
//     phonealert.style.visibility = "hidden"; 
// }
// function closealertmail(){
//     mailalert.style.visibility = "hidden"; 
// }
// function showalertphone(){
//     phonealert.style.visibility = "unset"; 
// }
// function showalertmail(){
//     mailalert.style.visibility = "unset"; 
// }