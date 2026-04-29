const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
const navLinks = document.querySelectorAll('.nav__link')
const themeButton = document.getElementById('theme-button')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
  })
}

navLinks.forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'))
})

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 80
    const sectionId = section.getAttribute('id')
    const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add('active-link')
    } else {
      link?.classList.remove('active-link')
    }
  })
})

const savedTheme = localStorage.getItem('selected-theme')
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme')
  themeButton.textContent = '☀️'
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  const isDark = document.body.classList.contains('dark-theme')
  themeButton.textContent = isDark ? '☀️' : '🌙'
  localStorage.setItem('selected-theme', isDark ? 'dark' : 'light')
})
