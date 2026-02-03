// DOM Elements
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const navLinks = document.querySelectorAll('.nav-link');
const workCards = document.querySelectorAll('.work-card');
const principleCards = document.querySelectorAll('.principle-card');
const contactForm = document.getElementById('contactForm');

// Mobile nav toggle
document.querySelectorAll('.nav').forEach((navElement) => {
    const toggle = navElement.querySelector('.nav-toggle');
    const links = navElement.querySelector('.nav-links');
    if (!toggle || !links) return;

    const closeNav = () => {
        navElement.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = navElement.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    toggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const isOpen = navElement.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        }
    });

    links.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (event) => {
        if (!navElement.contains(event.target)) {
            closeNav();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeNav();
        }
    });
});

// Cursor Movement
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Main cursor
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    // Follower
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor Hover Effects
const hoverableElements = document.querySelectorAll('a, button, .work-card, .principle-card, .zoomable-image, .zoomable-video, input, textarea, select');

hoverableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Work card hover stays CSS-only (match Work page behavior)

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(max-width: 600px)').matches;

// Hero Animations
const heroTl = gsap.timeline();
heroTl.from('.hero-title .line', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power4.out'
})
.from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.5')
.from('.hero-cta', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.6')
.from('.hero-contacts', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
}, '-=0.4');

if (!reduceMotion) {
    // Section headers
    gsap.utils.toArray('.section-header').forEach((header) => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Selected Work Cards Stagger
    gsap.utils.toArray('.work-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Case preview (home)
    gsap.from('.case-preview-text', {
        scrollTrigger: {
            trigger: '.case-preview',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
    });

    gsap.utils.toArray('.case-media-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.case-preview',
                start: 'top 75%'
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.08,
            ease: 'power3.out'
        });
    });

    // Timeline Animation
    gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%'
            },
            x: -40,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Education cards
    gsap.utils.toArray('.education-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Gallery cards (Work page)
    gsap.utils.toArray('.gallery-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Principle cards
    gsap.utils.toArray('.principle-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Contact section
    gsap.utils.toArray('.contact-info, .contact-form').forEach((block) => {
        gsap.from(block, {
            scrollTrigger: {
                trigger: block,
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Case study hero + info
    const caseHeroContent = document.querySelector('.case-hero-content');
    if (caseHeroContent) {
        gsap.from('.case-hero-content > *', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out'
        });
    }

    gsap.utils.toArray('.case-info-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.05,
            ease: 'power3.out'
        });
    });

    gsap.utils.toArray('.case-card, .case-step, .case-placeholder').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.03,
            ease: 'power3.out'
        });
    });
}

// Case study scroll gallery
const caseGallerySections = document.querySelectorAll('.case-gallery-scroll');
caseGallerySections.forEach((section) => {
    const track = section.querySelector('.case-gallery-track');
    const progress = section.querySelector('.case-gallery-bar');
    if (!track) return;
    if (section.classList.contains('case-gallery-auto')) {
        return;
    }

    const isNarrowScreen = window.matchMedia('(max-width: 900px)').matches;
    const getDistance = () => Math.max(0, track.scrollWidth - section.clientWidth);

    if (reduceMotion || isNarrowScreen || getDistance() === 0) {
        if (progress) {
            progress.style.transform = 'scaleX(1)';
        }
        return;
    }

    gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    if (progress) {
        gsap.to(progress, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${getDistance()}`,
                scrub: 0.6,
                invalidateOnRefresh: true
            }
        });
    }
});

// Case study comparison slider
const compareSections = document.querySelectorAll('[data-compare]');
compareSections.forEach((section) => {
    const range = section.querySelector('.case-compare-range');
    if (!range) return;

    const updatePosition = () => {
        const value = Number(range.value);
        section.style.setProperty('--compare', Number.isFinite(value) ? value : 50);
    };

    updatePosition();
    range.addEventListener('input', updatePosition);
    range.addEventListener('change', updatePosition);
});

// Principle Cards with hover glow
principleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)',
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            boxShadow: 'none',
            duration: 0.3
        });
    });
});

// Contact Form Validation & Submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate
        let isValid = true;

        const statusEl = contactForm.querySelector('.form-status');
        if (statusEl) statusEl.textContent = '';

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        const nameValue = String(data.name || '').trim();
        const emailValue = String(data.email || '').trim();
        const subjectValue = String(data.subject || '').trim();
        const messageValue = String(data.message || '').trim();

        if (!nameValue) {
            shakeInput(nameInput);
            isValid = false;
        }

        if (!emailValue || !isValidEmail(emailValue)) {
            shakeInput(emailInput);
            isValid = false;
        }

        if (!subjectValue) {
            shakeInput(subjectInput);
            isValid = false;
        }

        if (!messageValue) {
            shakeInput(messageInput);
            isValid = false;
        }

        if (!isValid) return;

        const topicMap = {
            'ui-ux': 'UI/UX Design',
            branding: 'Branding',
            webflow: 'Webflow Project',
            consulting: 'Design Consulting',
            other: 'Other'
        };

        const topic = topicMap[subjectValue] || 'Portfolio inquiry';
        const subjectLine = `${topic} — Portfolio inquiry`;
        const body = [
            `Name: ${nameValue}`,
            `Email: ${emailValue}`,
            `Topic: ${topic}`,
            '',
            messageValue
        ].join('\n');

        const mailto = `mailto:andjela.casic@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : '';

        if (submitBtn) {
            submitBtn.innerHTML = '<span>Opening email...</span>';
            submitBtn.disabled = true;
        }

        if (statusEl) {
            statusEl.textContent = 'Your email app should open. If it doesn’t, email me at andjela.casic@gmail.com.';
        }

        window.location.href = mailto;

        setTimeout(() => {
            if (!submitBtn) return;
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Certificate modal
const certificateCards = document.querySelectorAll('.certificate-card');
if (certificateCards.length) {
    const certificateModal = document.createElement('div');
    certificateModal.className = 'certificate-modal';
    certificateModal.innerHTML = `
        <div class="certificate-backdrop"></div>
        <div class="certificate-content" role="dialog" aria-modal="true" aria-label="Certificate preview">
            <button class="certificate-close" type="button" aria-label="Close certificate preview">
                <i class="ph ph-x"></i>
            </button>
            <img src="" alt="">
        </div>
    `;
    document.body.appendChild(certificateModal);

    const certificateContent = certificateModal.querySelector('.certificate-content');
    const certificateImage = certificateModal.querySelector('img');
    const certificateClose = certificateModal.querySelector('.certificate-close');
    const certificateBackdrop = certificateModal.querySelector('.certificate-backdrop');
    const minZoom = 1;
    const maxZoom = 3;
    const zoomStep = 0.15;
    let zoomScale = 1;

    function setCertificateZoom(scale) {
        zoomScale = Math.min(maxZoom, Math.max(minZoom, scale));
        certificateImage.style.width = `${zoomScale * 100}%`;
        certificateImage.style.cursor = zoomScale > 1 ? 'zoom-out' : 'zoom-in';
    }

    function openCertificateModal(card) {
        const cardImage = card.querySelector('img');
        if (!cardImage) return;

        certificateImage.src = cardImage.getAttribute('src');
        certificateImage.alt = cardImage.getAttribute('alt') || 'Certificate preview';
        setCertificateZoom(1);
        certificateContent.scrollTop = 0;
        certificateContent.scrollLeft = 0;
        certificateModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCertificateModal() {
        certificateModal.classList.remove('active');
        document.body.style.overflow = '';
        setCertificateZoom(1);
        certificateContent.scrollTop = 0;
        certificateContent.scrollLeft = 0;
    }

    certificateCards.forEach(card => {
        card.addEventListener('click', () => openCertificateModal(card));
    });

    certificateClose.addEventListener('click', closeCertificateModal);
    certificateBackdrop.addEventListener('click', closeCertificateModal);
    certificateContent.addEventListener('wheel', (event) => {
        if (!certificateModal.classList.contains('active')) return;
        event.preventDefault();
        const direction = event.deltaY < 0 ? 1 : -1;
        setCertificateZoom(zoomScale + direction * zoomStep);
    }, { passive: false });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certificateModal.classList.contains('active')) {
            closeCertificateModal();
        }
    });
}

// Image modal (case study zoom)
const zoomableImages = document.querySelectorAll('.zoomable-image');
if (zoomableImages.length) {
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';
    imageModal.innerHTML = `
        <div class="image-backdrop"></div>
        <div class="image-content" role="dialog" aria-modal="true" aria-label="Image preview">
            <button class="image-close" type="button" aria-label="Close image preview">
                <i class="ph ph-x"></i>
            </button>
            <img src="" alt="">
        </div>
    `;
    document.body.appendChild(imageModal);

    const imageElement = imageModal.querySelector('img');
    const imageClose = imageModal.querySelector('.image-close');
    const imageBackdrop = imageModal.querySelector('.image-backdrop');

    function openImageModal(image) {
        imageElement.src = image.getAttribute('src');
        imageElement.alt = image.getAttribute('alt') || 'Image preview';
        if (image.classList.contains('zoom-crop-10')) {
            imageModal.classList.add('image-modal-crop-10');
        } else {
            imageModal.classList.remove('image-modal-crop-10');
        }
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeImageModal() {
        imageModal.classList.remove('active');
        imageModal.classList.remove('image-modal-crop-10');
        document.body.style.overflow = '';
        imageElement.src = '';
        imageElement.alt = '';
    }

    zoomableImages.forEach(image => {
        image.addEventListener('click', () => openImageModal(image));
    });

    imageClose.addEventListener('click', closeImageModal);
    imageBackdrop.addEventListener('click', closeImageModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            closeImageModal();
        }
    });
}

// Video modal (case study zoom)
const zoomableVideos = document.querySelectorAll('.zoomable-video');
if (zoomableVideos.length) {
    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="video-backdrop"></div>
        <div class="video-content" role="dialog" aria-modal="true" aria-label="Video preview">
            <button class="video-close" type="button" aria-label="Close video preview">
                <i class="ph ph-x"></i>
            </button>
            <video src="" autoplay loop muted playsinline></video>
        </div>
    `;
    document.body.appendChild(videoModal);

    const videoElement = videoModal.querySelector('video');
    const videoClose = videoModal.querySelector('.video-close');
    const videoBackdrop = videoModal.querySelector('.video-backdrop');

    function openVideoModal(video) {
        videoElement.src = video.getAttribute('src');
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.playsInline = true;
        videoElement.autoplay = true;
        videoElement.load();
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const playPromise = videoElement.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    }

    function closeVideoModal() {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
        videoElement.pause();
        videoElement.removeAttribute('src');
        videoElement.load();
    }

    zoomableVideos.forEach(video => {
        video.addEventListener('click', () => openVideoModal(video));
    });

    videoClose.addEventListener('click', closeVideoModal);
    videoBackdrop.addEventListener('click', closeVideoModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function shakeInput(input) {
    gsap.to(input, {
        x: -10,
        duration: 0.05,
        repeat: 5,
        yoyo: true,
        ease: 'none',
        onComplete: () => {
            gsap.to(input, { x: 0, duration: 0.1 });
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.orb');

    orbs.forEach((orb, i) => {
        const speed = 0.05 + (i * 0.02);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Intersection Observer for reveal animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Typing effect for hero (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Add subtle noise texture to background
function addNoiseTexture() {
    const canvas = document.createElement('canvas');
    canvas.id = 'noise-canvas';
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:0.015;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function generateNoise() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const buffer = imageData.data;

        for (let i = 0; i < buffer.length; i += 4) {
            const gray = Math.random() * 255;
            buffer[i] = gray;
            buffer[i + 1] = gray;
            buffer[i + 2] = gray;
            buffer[i + 3] = 255;
        }

        ctx.putImageData(imageData, 0, 0);
        requestAnimationFrame(generateNoise);
    }

    generateNoise();
}

// Uncomment to enable noise texture
// addNoiseTexture();

// Dynamic year in footer
document.querySelector('.footer-content p').innerHTML = `&copy; ${new Date().getFullYear()} An&#273;ela &#262;asi&#263;. Crafted with intention.`;
