// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle
    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
        var navbarCollapse = document.getElementById('navbarNav');
        navbarCollapse.classList.toggle('show');
    });
//navigation bar

    document.addEventListener('DOMContentLoaded', function () {
        var navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.addEventListener('click', function () {
            var navbarCollapse = document.getElementById('navbarNav');
            navbarCollapse.classList.toggle('show');
        });
    });
//search funtionality
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const cancelSearchBtn = document.getElementById('cancelSearchBtn');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
});

cancelSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchContainer.classList.remove('active');
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchContainer.classList.remove('active');
    }
});




    // Noticeboard Section
    var noticeList = document.querySelector('.noticeboard .upcoming-events ul');
    var notices = [
        'Athletics competition on June 20th',
        'Academic trip on July 15th',
        'Community outreach on August 10th'
    ];
    
    notices.forEach(function (notice) {
        var listItem = document.createElement('li');
        listItem.textContent = notice;
        noticeList.appendChild(listItem);
    });

    // Scroll Animation (Using Animate.css)
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    document.addEventListener('scroll', function () {
        var elements = document.querySelectorAll('.animate__animated');
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('animate__fadeIn');
            }
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Additional Functionality: Back to Top Button
    var backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Top';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Initialize Owl Carousel (for testimonials)
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });
    });
});



//added reconfirm


document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle
    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
        var navbarCollapse = document.getElementById('navbarNav');
        navbarCollapse.classList.toggle('show');
    });

    // Scroll Animation (Using Animate.css)
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    document.addEventListener('scroll', function () {
        var elements = document.querySelectorAll('.animate__animated');
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('animate__fadeIn');
            }
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Additional Functionality: Back to Top Button
    var backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Top';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
});



// Ensure inclusion of required scripts for Bootstrap and Owl Carousel
var scriptBootstrap = document.createElement('script');
scriptBootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js';
document.head.appendChild(scriptBootstrap);

var scriptPopper = document.createElement('script');
scriptPopper.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js';
document.head.appendChild(scriptPopper);

var scriptOwlCarousel = document.createElement('script');
scriptOwlCarousel.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
document.head.appendChild(scriptOwlCarousel);

var linkOwlCarouselCSS = document.createElement('link');
linkOwlCarouselCSS.rel = 'stylesheet';
linkOwlCarouselCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';
document.head.appendChild(linkOwlCarouselCSS);

var linkOwlThemeCSS = document.createElement('link');
linkOwlThemeCSS.rel = 'stylesheet';
linkOwlThemeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css';
document.head.appendChild(linkOwlThemeCSS);


//progress bar
const progressBar = document.getElementById('progressBar');
const carousel = document.getElementById('heroCarousel');

carousel.addEventListener('slide.bs.carousel', () => {
    progressBar.style.width = '0';
});

carousel.addEventListener('slid.bs.carousel', () => {
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 50); // Small delay to trigger the CSS transition
});

// Initial load
progressBar.style.width = '100%';
