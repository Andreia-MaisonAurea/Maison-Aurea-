// Smooth scrolling for anchor links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});

// Form handling
$('#myForm').on('submit', function(event) {
    event.preventDefault();
    var isValid = true;
    // Perform validation here
    // if (input is invalid) isValid = false;
    if (isValid) {
        // Submit the form or perform an action
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all required fields correctly.');
    }
});

// Animations example
$('.animate').on('click', function() {
    $(this).animate({
        opacity: 0.5,
        height: 'toggle'
    }, 500);
});

// Navigation highlighting
$(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass('active');
            currLink.addClass('active');
        } else {
            currLink.removeClass('active');
        }
    });
});