document.addEventListener('DOMContentLoaded', function() {
    // ... (Code für Mobile Nav, Nav Scroll etc. bleibt gleich) ...

    // === STICKY HERO & PARALLAX ZOOM (FINALE VERSION) ===
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

            // Berechne den Fortschritt nur, während die Sektion gepinnt ist
            if (scrollTop >= pinStart && scrollTop <= pinStart + pinDuration) {
                // Fortschritt von 0 (Beginn des Pinnings) bis 1 (Ende des Pinnings)
                const progress = (scrollTop - pinStart) / pinDuration;
                
                // 1. Hintergrund: Zoomt von 100% auf 130% basierend auf dem Fortschritt
                const bgScale = 1 + progress * 0.3;
                parallaxBg.style.transform = `scale(${bgScale})`;

                // 2. Vordergrund (Bergspitze): Bleibt fast komplett still
                // Du kannst hier eine minimale Bewegung einbauen, wenn du magst
                // z.B. `translateY(${progress * -50}px)` für einen leichten 3D-Effekt
                parallaxFg.style.transform = `scale(1)`; // Bleibt fix

            } else if (scrollTop < pinStart) {
                // Reset vor dem Pinning
                parallaxBg.style.transform = 'scale(1)';
                parallaxFg.style.transform = 'scale(1)';
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


    // KOMPLETTER CODE ZUM KOPIEREN (inklusive der anderen Funktionen):
    
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