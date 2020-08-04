
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','menu')


const navLink = document.querySelectorAll('.link')

function linkAction(){
    const navMenu = document.getElementById('menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {})
sr.reveal('.home-scroll', {delay: 200})
sr.reveal('.home-img', {origin:'right', delay: 400})


sr.reveal('.about-img', {delay: 500})
sr.reveal('.about-subtitle', {delay: 300})
sr.reveal('.about-profession', {delay: 400})
sr.reveal('.about-text', {delay: 500})
sr.reveal('.about-social-icon', {delay: 600, interval: 200})


sr.reveal('.skills-img', {interval: 200})


sr.reveal('.portfolio-img', {interval: 200})


sr.reveal('.contact-subtitle', {})
sr.reveal('.contact-text', {interval: 200})
sr.reveal('.contact-input', {delay: 400})
sr.reveal('.contact-button', {delay: 600})




