const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {

        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the inputs fields ⚠️'
    } else {
        emailjs.sendForm('service_sq5dhvj', 'template_se1sfcp', '#contact-form', 'znBwCPFCSPTb454dc')
            .then(() => {
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message Sent Successfully ✅'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS ! SOMETHING WENT WRONG...', error)
            })

        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-moon");
    } else {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})


var typed = new Typed(".typing", {
    strings: ["", "Mobile Developer", "Web Developer", "UI/UX Designer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length,
    allSections = document.querySelectorAll(".section"),
    totalSection = allSections.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function() {
        for (let i = 0; i < totalSection; i++) {
            allSections[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                allSections[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogllerbtn();
        }
    })
}

function showSection(element) {

    for (let i = 0; i < totalSection; i++) {
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")

}


const navTogglerbtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerbtn.addEventListener("click", () => {
    asideSectionTogllerbtn();
})

function asideSectionTogllerbtn() {
    aside.classList.toggle("open");
    navTogglerbtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSections[i].classList.toggle("open");
    }
}