/*==================== MENU SHOW & HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills() {
  if (window.screen.width >= 568) {
    let itemClass = this.parentNode?.className
    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__open'
    }
    if (itemClass === 'skills__content skills__open') {
      this.parentNode.className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open'
    }
  }
  else if (window.screen.width < 568) {
    let itemClass = this.parentNode.className
    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__open'
    }
    if (itemClass === 'skills__content skills__open') {
      this.parentNode.className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open'
    }
  }
}
window.addEventListener('load', toggleSkills)

skillsHeader.forEach(el => {
  el.addEventListener('click', toggleSkills)
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('header')

  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header')
  }
  else {
    nav.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')

  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll')
  }
  else {
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK/LIGHT THEME ====================*/
const switchDarkMode = document.getElementById('theme-button')
const currentTheme = localStorage.getItem("theme")

if (currentTheme == "dark") {
    document.body.classList.add('dark-theme')
    switchDarkMode.className = "uil uil-moon change-theme"
}

switchDarkMode.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme')

    let theme = "light"
    switchDarkMode.className = "uil uil-moon change-theme"
    if (document.body.classList.contains('dark-theme')) {
        theme = "dark"
        switchDarkMode.className = "uil uil-sun change-theme"
    }
    localStorage.setItem("theme", theme)
})