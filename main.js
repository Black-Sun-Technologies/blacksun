$(document).ready(function() {
    // Update copyright year
    $('.copyright').text(`© ${new Date().getFullYear()} Black Sun Technologies. All rights reserved.`);

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70 // Offset for fixed header
            }, 1000);
        }
    });

    // Handle dark mode
    function updateDarkMode() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    // Initial dark mode check
    updateDarkMode();

    // Listen for system dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDarkMode);
});
