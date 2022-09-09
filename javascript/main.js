const mobileBtn = document.querySelector('#mobile-btn')
const mobileMenu = document.querySelector('.mobile-menu')

mobileBtn.addEventListener('click', () => { 
    mobileMenu.classList.toggle('active')
    mobileBtn.classList.toggle('active')
})