let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Make sure the attribute selector string is correctly quoted
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        };
    });
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};







let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['HTML','CSS', 'JavaScript', 'Node.js', 'Express', ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

emailjs.init('pf7cenkPnLQfvUffl'); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
    
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Use EmailJS to send the email
    emailjs.sendForm('service_69ddacf', 'template_735o8yq', this)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('Success:', response);
        }, function(error) {
            alert('Failed to send message.');
            console.log('Error:', error);
        });
});


