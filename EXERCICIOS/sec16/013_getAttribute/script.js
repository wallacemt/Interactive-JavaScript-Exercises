let a = document.querySelector("footer a")

console.log(a.getAttribute('href'))

let link = 'https://anitube.vip'

a.setAttribute('href', link);

console.log(a.getAttribute("href"))