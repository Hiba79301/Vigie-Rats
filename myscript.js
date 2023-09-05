
document.getElementById('accueil-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'VGrats.html'; 
});

document.getElementById('Désinfection-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Désinfection.html'; 
});

document.getElementById('Dératisation-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Dératisation.html'; 
});

document.getElementById('Désinsectisation-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Désinsectisation.html'; 
});

document.getElementById('Nettoyage-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Nettoyage.html'; 
});

document.getElementById('Jardinage-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Jardinage.html'; 
});

document.getElementById('Galerie-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Galerie.html'; 
});

document.getElementById('Contactez-nous-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'Contact.html'; 
});

const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl =>{
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    if (windowPathname === navLinkPathname) {
        navLinkEl.classList.add('active'); 
    }
});


const toggleIcon = document.querySelector('.toggel-menu');
const navMenu = document.querySelector('nav ul');

toggleIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 0){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})


const name = document.getElementById('name');
const societe = document.getElementById('societe');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const ville = document.getElementById('ville');
const service = document.getElementById('service');
const superficie = document.getElementById('superficie');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-devis')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");

    let ebody = `
    <b>Nom-prénom: </b>${name.value}
        <br> 
        <b>Société: </b>${societe.value}
        <br>
        <b>Email: </b>${email.value}
        <br>
        <b>Téléphone: </b>${phone.value}
        <br>
        <b>Ville: </b>${ville.value}
        <br>
        <b>Service: </b>${service.value}
        <br>
        <b>Superficie à traiter: </b>${superficie.value}
        <br>
        <b>Message: </b>${message.value}
        <br>
    `

    Email.send({
        SecureToken : "aeaa67c0-bdee-4ca5-bb3a-2d171dafc384",
        To : 'khalidihiba503@gmail.com',
        From : "khalidihiba503@gmail.com",
        Subject : "Demande de devis de  " +  email.value,
        Body : ebody 
    }).then(
      message => alert(message)
    );
});