const dots = document.querySelectorAll('.carousel-dots .dot');
        const carouselImages = document.querySelector('.carousel-images');
        let currentIndex = 0;

        function updateCarousel(index) {
            const offset = -index * 320; 
            carouselImages.style.transform = `translateX(${offset}px)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
            currentIndex = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
        });