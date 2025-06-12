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
    
    // === FINALE LOGIK FÜR HERO-ANIMATIONEN ===
    const pinContainer = document.querySelector('.pin-container');
    const parallaxBg = document.getElementById('parallax-bg');
    const parallaxFg = document.getElementById('parallax-fg');
    const lightElement = document.getElementById('hero-light');
    const heroSection = document.getElementById('hero');

    if (pinContainer && parallaxBg && parallaxFg && lightElement && heroSection) {
        
        // --- PINNING & ZOOM LOGIK ---
        const updatePinnedAnimation = () => {
            const scrollTop = window.pageYOffset;
            const pinStart = pinContainer.offsetTop;
            const pinDuration = pinContainer.offsetHeight - window.innerHeight;

            if (scrollTop >= pinStart && scrollTop <= pinStart + pinDuration) {
                const progress = (scrollTop - pinStart) / pinDuration;
                
                // 1. Hintergrund zoomt (von 100% auf 130%)
                const bgScale = 1 + progress * 0.3;
                parallaxBg.style.transform = `scale(${bgScale})`;

                // 2. Vordergrund zoomt minimal mit und wird leicht nach unten geschoben, um auf dem Boden zu bleiben
                const fgScale = 1 + progress * 0.05; // Zoomt nur 5%
                const fgTranslateY = progress * 50; // Verschiebt sich 50px nach unten
                parallaxFg.style.transform = `scale(${fgScale}) translateY(${fgTranslateY}px)`;
            }
        };

        // --- LICHTKEGEL LOGIK ---
        const updateLightPosition = (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            lightElement.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(1)`;
        };
        heroSection.addEventListener('mouseenter', () => lightElement.style.transform = lightElement.style.transform.replace('scale(0)', 'scale(1)'));
        heroSection.addEventListener('mouseleave', () => lightElement.style.transform = lightElement.style.transform.replace('scale(1)', 'scale(0)'));
        heroSection.addEventListener('mousemove', updateLightPosition);

        // --- ALLES IN EINEM EVENT LISTENER FÜR PERFORMANCE ---
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updatePinnedAnimation();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ... (restliche Skripte wie Video Player etc. bleiben unverändert) ...
});

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


