const nav = document.querySelector('#navbar'); // Identify target
const navToggler = document.querySelector('.mobile-nav');
const navToggle = document.querySelectorAll('.res-menu'); // Corrected id selection

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY > 150) { 
        nav.style.backgroundColor = '#000';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

function toggleNav() {
    // Toggle the 'show-nav' class on the navToggle element
    navToggle.forEach(element => {
        element.classList.toggle('show-nav');
    });
}


// Add event listener to the mobile-nav element with the toggleNav function as the callback
navToggler.addEventListener('click', toggleNav);
