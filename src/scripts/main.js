document.addEventListener('DOMContentLoaded', function() {
    
    // === MOBILE NAVIGATION ===
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    const body = document.body;

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            body.classList.toggle('menu-open');
        });
    }
    if (mobileNavLinks.length) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.classList.remove('menu-open');
            });
        });
    }

    // === NAVIGATION BEIM SCROLLEN ===
    const nav = document.getElementById('nav');
    if (nav) {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // === ELEMENTE BEIM SCROLLEN EINBLENDEN ===
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        scrollObserver.observe(el);
    });
    
    // === STICKY HERO & PARALLAX ZOOM ===
    const pinContainer = document.querySelector('.pin-container');
    const heroSection = document.querySelector('.sticky-hero');
    const parallaxBg = document.getElementById('parallax-bg');
    const parallaxFg = document.getElementById('parallax-fg');

    if (pinContainer && heroSection && parallaxBg && parallaxFg) {
        let ticking = false;

        const updatePinnedAnimation = () => {
            const rect = pinContainer.getBoundingClientRect();
            const scrollTop = window.pageYOffset;
            const pinStart = pinContainer.offsetTop;
            const pinDuration = pinContainer.offsetHeight - window.innerHeight;

            if (scrollTop >= pinStart && scrollTop <= pinStart + pinDuration) {
                const progress = (scrollTop - pinStart) / pinDuration;
                
                const bgScale = 1 + progress * 0.3;
                parallaxBg.style.transform = `scale(${bgScale})`;

                const fgTranslateY = progress * 20; 
                parallaxFg.style.transform = `translateY(-${fgTranslateY}px) translateX(-50%)`;
            }
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updatePinnedAnimation);
                ticking = true;
            }
        }, { passive: true });
    }

    // === SMART VIDEO PLAYBACK ===
    const smartVideos = document.querySelectorAll('[data-smart-video]');
    if (smartVideos.length) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    video.play().catch(e => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });
        smartVideos.forEach((video) => videoObserver.observe(video));
    }
});