/* ==========================================
   ELEMENTS
========================================== */

const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const hero = document.querySelector(".hero");


/* ==========================================
   GSAP
========================================== */

gsap.registerPlugin(ScrollTrigger);


/* ==========================================
   HEADER
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ==========================================
   MOBILE MENU
========================================== */

menuToggle.addEventListener("click", () => {

    const isOpen = mobileMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';

});


mobileMenu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="bi bi-list"></i>';

    });

});


/* ==========================================
   HERO INTRO
========================================== */

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


heroTimeline

    .from(".site-header", {
        y: -30,
        opacity: 0,
        duration: 0.8
    })

    .from(".hero-status", {
        y: 18,
        opacity: 0,
        duration: 0.6
    }, "-=0.35")

    .from(".title-line > span", {
        yPercent: 110,
        duration: 1,
        stagger: 0.12
    }, "-=0.3")

    .from(".hero-description", {
        y: 25,
        opacity: 0,
        duration: 0.75
    }, "-=0.55")

    .from(".hero-actions .btn", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1
    }, "-=0.45")

    .from(".hero-bottom", {
        y: 15,
        opacity: 0,
        duration: 0.6
    }, "-=0.35")

    .from(".developer-card", {
        x: 55,
        y: 25,
        opacity: 0,
        rotate: 5,
        scale: 0.96,
        duration: 1.1
    }, "-=1.15")

    .from(".tech-badge", {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.7)"
    }, "-=0.55")

    .from(".visual-orbit", {
        scale: 0.75,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12
    }, "-=1");


/* ==========================================
   HERO MOUSE EFFECT
========================================== */

if (
    hero &&
    window.matchMedia("(min-width: 851px)").matches
) {

    hero.addEventListener("mousemove", (event) => {

        const x = event.clientX;
        const y = event.clientY;

        gsap.to(".visual-glow", {
            x: (x - window.innerWidth / 2) * 0.025,
            y: (y - window.innerHeight / 2) * 0.025,
            duration: 1.8,
            ease: "power2.out"
        });

    });

}


/* ==========================================
   GENERIC SECTION REVEAL
========================================== */

gsap.utils.toArray(".reveal").forEach((element) => {

    gsap.from(element, {
        y: 55,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true
        }
    });

});


/* ==========================================
   ABOUT SECTION
========================================== */

const aboutTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        once: true,

        // Keep temporarily for testing
        markers: false
    }

});


aboutTimeline

    /* Header */
    .from(".about-header", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    })

    /* Main heading */
    .from(".about-title-line > span", {
        yPercent: 120,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out"
    }, "-=0.3")

    /* Right content */
    .from(".about-content > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
    }, "-=0.55")

    /* Bottom information */
    .from(".about-detail", {
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.4");


/* ==========================================
   REFRESH SCROLLTRIGGER
========================================== */

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});


/* ==========================================
   SKILLS SECTION ANIMATION
========================================== */

const skillsTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".skills-section",
        start: "top 72%",
        once: true
    }

});


skillsTimeline

    /* Section header */
    .from(".skills-header", {
        y: 25,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out"
    })


    /* Main title */
    .from(".skills-title-line > span", {
        yPercent: 115,
        duration: 0.9,
        stagger: 0.1,
        ease: "power4.out"
    }, "-=0.25")


    /* Description */
    .from(".skills-intro-copy", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out"
    }, "-=0.55")


    /* Left categories */
    .from(".skill-category", {
        x: -30,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.35")


    /* Technology panel */
    .from(".technology-panel", {
        x: 35,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out"
    }, "-=0.75")


    /* Technology icons */
    .from(".technology-item", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: {
            each: 0.045,
            from: "start"
        },
        ease: "power2.out"
    }, "-=0.4");



    /* ==========================================
   SERVICES SECTION
========================================== */

const servicesTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".services-section",
        start: "top 72%",
        once: true
    }

});


servicesTimeline

    /* Header */
    .from(".services-header", {
        y: 25,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out"
    })


    /* Heading */
    .from(".services-title-line > span", {
        yPercent: 115,
        duration: 0.9,
        stagger: 0.11,
        ease: "power4.out"
    }, "-=0.25")


    /* Intro text */
    .from(".services-intro-copy", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out"
    }, "-=0.5")


    /* Service rows */
    .from(".service-item", {
        y: 45,
        opacity: 0,
        duration: 0.8,

        stagger: {
            each: 0.12
        },

        ease: "power3.out"
    }, "-=0.25");




    /* ==========================================
   SELECTED WORK
========================================== */

const workIntroTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".work-section",
        start: "top 72%",
        once: true
    }

});


workIntroTimeline

    .from(".work-header", {
        y: 25,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out"
    })


    .from(".work-title-line > span", {
        yPercent: 115,
        duration: 0.95,
        stagger: 0.11,
        ease: "power4.out"
    }, "-=0.25")


    .from(".work-intro-right", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out"
    }, "-=0.5");




    gsap.utils.toArray(".project-row").forEach((project) => {

    const visual =
        project.querySelector(".project-visual");

    const content =
        project.querySelector(".project-content");

    const meta =
        project.querySelector(".project-meta");


    const timeline = gsap.timeline({

        scrollTrigger: {
            trigger: project,
            start: "top 78%",
            once: true
        }

    });


    timeline

        .from(meta, {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out"
        })


        .from(visual, {
            y: 50,
            opacity: 0,
            scale: 0.97,
            duration: 0.9,
            ease: "power3.out"
        }, "-=0.2")


        .from(content, {
            y: 35,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out"
        }, "-=0.55");

});


gsap.utils.toArray(".project-screen").forEach((screen) => {

    gsap.fromTo(
        screen,

        {
            backgroundPosition: "50% 40%"
        },

        {
            backgroundPosition: "50% 60%",

            ease: "none",

            scrollTrigger: {
                trigger: screen,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );

});




/* ==========================================
   EXPERIENCE SECTION
========================================== */

const experienceTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".experience-section",
        start: "top 72%",
        once: true
    }

});


experienceTimeline

    /* Header */
    .from(".experience-header", {
        y: 25,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out"
    })


    /* Heading */
    .from(".experience-title-line > span", {
        yPercent: 115,
        duration: 0.95,
        stagger: 0.11,
        ease: "power4.out"
    }, "-=0.25")


    /* Description */
    .from(".experience-intro-copy", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out"
    }, "-=0.5");




    /* ==========================================
   EXPERIENCE ITEMS
========================================== */

gsap.utils.toArray(".experience-item").forEach((item) => {

    const date =
        item.querySelector(".experience-date");

    const marker =
        item.querySelector(".experience-dot");

    const content =
        item.querySelector(".experience-content");

    const highlights =
        item.querySelectorAll(".experience-highlight");

    const tags =
        item.querySelectorAll(".experience-tech span");


    const timeline = gsap.timeline({

        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            once: true
        }

    });


    timeline

        .from(date, {
            x: -20,
            opacity: 0,
            duration: 0.55,
            ease: "power3.out"
        })


        .from(marker, {
            scale: 0,
            duration: 0.4,
            ease: "back.out(1.8)"
        }, "-=0.3")


        .from(content, {
            y: 35,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out"
        }, "-=0.35")


        .from(highlights, {
            x: 15,
            opacity: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power2.out"
        }, "-=0.35")


        .from(tags, {
            y: 10,
            opacity: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.out"
        }, "-=0.25");

});




/* ==========================================
   EXPERIENCE TIMELINE PROGRESS
========================================== */

gsap.to(".experience-timeline", {

    "--timeline-progress": "100%",

    ease: "none",

    scrollTrigger: {
        trigger: ".experience-timeline",
        start: "top 70%",
        end: "bottom 55%",
        scrub: 1
    }

});


/* ==========================================
   PROCESS INTRO
========================================== */

const processTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".process-section",
        start: "top 72%",
        once: true
    }

});


processTimeline

    .from(".process-header", {
        y: 25,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out"
    })


    .from(".process-title-line > span", {
        yPercent: 115,
        duration: 0.95,
        stagger: 0.11,
        ease: "power4.out"
    }, "-=0.25")


    .from(".process-intro-copy", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out"
    }, "-=0.5");


    /* ==========================================
   PROCESS STEPS
========================================== */

gsap.from(".process-step", {

    y: 45,
    opacity: 0,

    duration: 0.8,

    stagger: {
        each: 0.12
    },

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".process-track",
        start: "top 78%",
        once: true
    }

});


gsap.from(".process-bottom", {

    y: 30,
    opacity: 0,

    duration: 0.8,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".process-bottom",
        start: "top 88%",
        once: true
    }

});


/* ==========================================
   PROCESS PROGRESS LINE
========================================== */

const processMatchMedia = gsap.matchMedia();


/* Desktop */

processMatchMedia.add(
    "(min-width: 769px)",
    () => {

        gsap.to(".process-line-progress", {

            width: "100%",

            ease: "none",

            scrollTrigger: {
                trigger: ".process-track",
                start: "top 70%",
                end: "bottom 55%",
                scrub: 1
            }

        });

    }
);


/* Mobile */

processMatchMedia.add(
    "(max-width: 768px)",
    () => {

        gsap.to(".process-line-progress", {

            height: "100%",

            ease: "none",

            scrollTrigger: {
                trigger: ".process-track",
                start: "top 72%",
                end: "bottom 60%",
                scrub: 1
            }

        });

    }
);


/* ==========================================
   CONTACT INTRO
========================================== */

const contactTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        once: true
    }

});


contactTimeline

    /* Header */
    .from(".contact-header", {
        y: 25,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out"
    })


    /* Availability */
    .from(".contact-status", {
        y: 20,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out"
    }, "-=0.25")


    /* Big heading */
    .from(".contact-title-line > span", {
        yPercent: 115,
        duration: 1,
        stagger: 0.11,
        ease: "power4.out"
    }, "-=0.2")


    /* Description */
    .from(".contact-copy", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.45")


    /* Circle */
    .from(".contact-circle", {
        scale: 0.7,
        opacity: 0,
        duration: 0.75,
        ease: "back.out(1.4)"
    }, "-=0.55");


    gsap.from(".contact-detail", {

    y: 30,
    opacity: 0,

    duration: 0.7,

    stagger: 0.1,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".contact-details",
        start: "top 88%",
        once: true
    }

});


/* ==========================================
   CONTACT MAGNETIC BUTTON
========================================== */

const contactCircle =
    document.querySelector(".contact-circle");


if (
    contactCircle &&
    window.matchMedia("(min-width: 769px)").matches
) {

    contactCircle.addEventListener("mousemove", (event) => {

        const rect =
            contactCircle.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left -
            rect.width / 2;


        const y =
            event.clientY -
            rect.top -
            rect.height / 2;


        gsap.to(contactCircle, {

            x: x * 0.16,
            y: y * 0.16,

            duration: 0.4,

            ease: "power2.out"

        });

    });


    contactCircle.addEventListener("mouseleave", () => {

        gsap.to(contactCircle, {

            x: 0,
            y: 0,

            duration: 0.6,

            ease: "elastic.out(1, 0.45)"

        });

    });

}


gsap.to(".contact-glow-one", {

    y: -100,

    ease: "none",

    scrollTrigger: {
        trigger: ".contact-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
    }

});




/* ==========================================
   CONTACT FORM REVEAL
========================================== */

const contactFormTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".contact-form-wrap",
        start: "top 82%",
        once: true
    }

});


contactFormTimeline

    .from(".contact-form-heading", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    })


    .from(".contact-form .form-group", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out"
    }, "-=0.4")


    .from(".form-footer", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.3");