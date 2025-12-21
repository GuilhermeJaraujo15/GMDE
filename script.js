// Smooth Scroll
function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    // Fecha menu mobile se estiver aberto
    const navMenu = document.getElementById("navMenu")
    navMenu.classList.remove("active")
  }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Fecha menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})

// Navbar scroll effect
let lastScroll = 0
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.background = "rgba(26, 20, 68, 0.98)"
    navbar.style.boxShadow = "0 4px 20px rgba(145, 2, 255, 0.1)"
  } else {
    navbar.style.background = "rgba(26, 20, 68, 0.95)"
    navbar.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Form Submit
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  contactForm.reset()
})

// Animações ao scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Aplica animação aos cards
const animatedElements = document.querySelectorAll(".card, .team-card, .portfolio-card, .info-card, .feature-item")
animatedElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})

// Typewriter Effect - Hero Title
const text = "Transformamos Suas Ideias em Realidade Digital"
const target = document.getElementById("typewriter")

let index = 0
const speed = 65 // velocidade equilibrada (ms)

function typeWriter() {
  if (index < text.length) {
    target.textContent += text.charAt(index)
    index++
    setTimeout(typeWriter, speed)
  } else {
    // adiciona cursor ao final
    const cursor = document.createElement("span")
    cursor.classList.add("typewriter-cursor")
    target.appendChild(cursor)
  }
}

// inicia após pequeno delay para elegância
setTimeout(typeWriter, 0)

// Animações ao scroll (Intersection Observer)

// Subtle Reveal Animations (UI/UX Oriented)
const revealElements = [
  { selector: ".hero-content > *:not(h1)", animation: "reveal-up" },
  { selector: ".hero-image", animation: "reveal-right" },

  { selector: ".about-content p", animation: "reveal-up" },
  { selector: ".feature-item", animation: "reveal-left" },

  { selector: ".card", animation: "reveal-up" },
  { selector: ".team-card", animation: "reveal-up" },
  { selector: ".portfolio-card", animation: "reveal-up" },

  { selector: ".contact-info .contact-item", animation: "reveal-left" },
  { selector: ".contact-form", animation: "reveal-right" },

  { selector: ".btn-primary, .btn-large, .btn-secondary, .btn-submit", animation: "reveal-fade" },
  { selector: ".social-btn", animation: "reveal-fade" }
]

revealElements.forEach(group => {
  document.querySelectorAll(group.selector).forEach(el => {
    el.classList.add("reveal", group.animation)
  })
})

const observere = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observere.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  }
)

document.querySelectorAll(".reveal").forEach(el => observere.observe(el))

// Fecha menu mobile ao clicar fora
document.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)
  ) {
    navMenu.classList.remove("active")
  }
})
