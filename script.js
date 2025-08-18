document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-button').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('href') === `#${entry.target.id}`) {
                        btn.classList.add('active');
                    }
                });
            }
        });
    }, {threshold: 0.7});

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    const homeSection = document.getElementById('home');
    let scrollTimeout;
    
    function showScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        homeSection.appendChild(indicator);
        
        setTimeout(() => {
            indicator.remove();
        }, 2000);
    }
    
    scrollTimeout = setTimeout(() => {
        if (window.scrollY < 50) {
            showScrollIndicator();
        }
    }, 3000);
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
    });
});