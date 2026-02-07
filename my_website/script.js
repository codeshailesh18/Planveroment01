document.addEventListener("DOMContentLoaded", () => {
    
    const slides = document.querySelectorAll('.bg-slide');
    let currentSlide = 0;
    const slideInterval = 4000; // Switch every 4 seconds

    function nextSlide() {
        // 1. Remove 'active' from current slide
        slides[currentSlide].classList.remove('active');
        
        // 2. Calculate next index (loop back to 0 if at end)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 3. Add 'active' to new slide
        slides[currentSlide].classList.add('active');
    }

    // Start the automatic transition
    setInterval(nextSlide, slideInterval);

    // Optional: Smooth Scroll for Navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});