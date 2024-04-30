const nav = document.querySelector('.nnn')
fetch('asset/navbar.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
  })
const upband = document.querySelector('.uppp')
fetch('asset/upband.html')
  .then(res => res.text())
  .then(data => {
    upband.innerHTML = data
  })
const fff = document.querySelector('.fff')
fetch('asset/footer.html')
  .then(res => res.text())
  .then(data => {
    fff.innerHTML = data
  })