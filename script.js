
// Global state
let currentLanguage = 'en';

// Language translations
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Winter': 'Winter',
        'Summer': 'Summer',
        'Family': 'Family',
        'Corporate': 'Corporate',
        'Gallery': 'Gallery',
        'Location': 'Location',
        'Guest Book': 'Guest Book',
        'Make an Inquiry': 'Make an Inquiry',
        
        // Hero Section
        'Where Luxury Meets Alpine Authenticity': 'Where Luxury Meets Alpine Authenticity',
        'Experience the perfect harmony of space, view, and light at Chalet Tuftra - your exclusive gateway to Matterhorn magic': 'Experience the perfect harmony of space, view, and light at Chalet Tuftra - your exclusive gateway to Matterhorn magic',
        'Reserve Your Alpine Escape': 'Reserve Your Alpine Escape',
        'Explore the Chalet': 'Explore the Chalet',
        
        // Features
        'Matterhorn Views': 'Matterhorn Views',
        'Wake up to breathtaking panoramic views of the iconic Matterhorn from every window': 'Wake up to breathtaking panoramic views of the iconic Matterhorn from every window',
        'Space & Light': 'Space & Light',
        'Thoughtfully designed interiors flooded with natural light create an atmosphere of serene luxury': 'Thoughtfully designed interiors flooded with natural light create an atmosphere of serene luxury',
        'Family Hub': 'Family Hub',
        'Spacious layouts perfect for multi-generational gatherings and creating lifelong memories': 'Spacious layouts perfect for multi-generational gatherings and creating lifelong memories',
        
        // Footer
        'Your luxury Alpine sanctuary in the heart of Zermatt': 'Your luxury Alpine sanctuary in the heart of Zermatt',
        'Quick Links': 'Quick Links',
        'Contact': 'Contact',
        'Partnership': 'Partnership',
        'Managed in partnership with': 'Managed in partnership with',
        'All rights reserved': 'All rights reserved',
        
        // Modal
        'Full Name *': 'Full Name *',
        'Email Address *': 'Email Address *',
        'Check-in Date': 'Check-in Date',
        'Check-out Date': 'Check-out Date',
        'Number of Guests': 'Number of Guests',
        'Message': 'Message',
        'Send Inquiry': 'Send Inquiry',
        'Tell us about your ideal Alpine experience...': 'Tell us about your ideal Alpine experience...'
    },
    de: {
        // Navigation
        'Home': 'Startseite',
        'About': 'Über uns',
        'Winter': 'Winter',
        'Summer': 'Sommer',
        'Family': 'Familie',
        'Corporate': 'Corporate',
        'Gallery': 'Galerie',
        'Location': 'Lage',
        'Guest Book': 'Gästebuch',
        'Make an Inquiry': 'Anfrage stellen',
        
        // Hero Section
        'Where Luxury Meets Alpine Authenticity': 'Wo Luxus auf Alpine Authentizität trifft',
        'Experience the perfect harmony of space, view, and light at Chalet Tuftra - your exclusive gateway to Matterhorn magic': 'Erleben Sie die perfekte Harmonie von Raum, Aussicht und Licht im Chalet Tuftra - Ihr exklusiver Zugang zur Matterhorn-Magie',
        'Reserve Your Alpine Escape': 'Reservieren Sie Ihren Alpine Rückzugsort',
        'Explore the Chalet': 'Erkunden Sie das Chalet',
        
        // Features
        'Matterhorn Views': 'Matterhorn Blick',
        'Wake up to breathtaking panoramic views of the iconic Matterhorn from every window': 'Erwachen Sie mit atemberaubenden Panoramablicken auf das ikonische Matterhorn aus jedem Fenster',
        'Space & Light': 'Raum & Licht',
        'Thoughtfully designed interiors flooded with natural light create an atmosphere of serene luxury': 'Durchdacht gestaltete Innenräume, durchflutet von natürlichem Licht, schaffen eine Atmosphäre ruhigen Luxus',
        'Family Hub': 'Familien-Zentrum',
        'Spacious layouts perfect for multi-generational gatherings and creating lifelong memories': 'Geräumige Grundrisse, perfekt für Mehrgenerationen-Treffen und das Schaffen lebenslanger Erinnerungen',
        
        // Footer
        'Your luxury Alpine sanctuary in the heart of Zermatt': 'Ihr luxuriöses Alpine Refugium im Herzen von Zermatt',
        'Quick Links': 'Schnelle Links',
        'Contact': 'Kontakt',
        'Partnership': 'Partnerschaft',
        'Managed in partnership with': 'Verwaltet in Partnerschaft mit',
        'All rights reserved': 'Alle Rechte vorbehalten',
        
        // Modal
        'Full Name *': 'Vollständiger Name *',
        'Email Address *': 'E-Mail-Adresse *',
        'Check-in Date': 'Anreisedatum',
        'Check-out Date': 'Abreisedatum',
        'Number of Guests': 'Anzahl der Gäste',
        'Message': 'Nachricht',
        'Send Inquiry': 'Anfrage senden',
        'Tell us about your ideal Alpine experience...': 'Erzählen Sie uns von Ihrem idealen Alpine Erlebnis...'
    },
    fr: {
        // Navigation
        'Home': 'Accueil',
        'About': 'À Propos',
        'Winter': 'Hiver',
        'Summer': 'Été',
        'Family': 'Famille',
        'Corporate': 'Corporate',
        'Gallery': 'Galerie',
        'Location': 'Emplacement',
        'Guest Book': 'Livre d\'Or',
        'Make an Inquiry': 'Faire une Demande',
        
        // Hero Section
        'Where Luxury Meets Alpine Authenticity': 'Où le Luxe Rencontre l\'Authenticité Alpine',
        'Experience the perfect harmony of space, view, and light at Chalet Tuftra - your exclusive gateway to Matterhorn magic': 'Découvrez l\'harmonie parfaite de l\'espace, de la vue et de la lumière au Chalet Tuftra - votre porte d\'entrée exclusive vers la magie du Cervin',
        'Reserve Your Alpine Escape': 'Réservez Votre Évasion Alpine',
        'Explore the Chalet': 'Explorez le Chalet',
        
        // Features
        'Matterhorn Views': 'Vues sur le Cervin',
        'Wake up to breathtaking panoramic views of the iconic Matterhorn from every window': 'Réveillez-vous avec des vues panoramiques époustouflantes sur l\'emblématique Cervin depuis chaque fenêtre',
        'Space & Light': 'Espace & Lumière',
        'Thoughtfully designed interiors flooded with natural light create an atmosphere of serene luxury': 'Des intérieurs soigneusement conçus baignés de lumière naturelle créent une atmosphère de luxe serein',
        'Family Hub': 'Centre Familial',
        'Spacious layouts perfect for multi-generational gatherings and creating lifelong memories': 'Des aménagements spacieux parfaits pour les rassemblements multigénérationnels et la création de souvenirs inoubliables',
        
        // Footer
        'Your luxury Alpine sanctuary in the heart of Zermatt': 'Votre sanctuaire alpin de luxe au cœur de Zermatt',
        'Quick Links': 'Liens Rapides',
        'Contact': 'Contact',
        'Partnership': 'Partenariat',
        'Managed in partnership with': 'Géré en partenariat avec',
        'All rights reserved': 'Tous droits réservés',
        
        // Modal
        'Full Name *': 'Nom Complet *',
        'Email Address *': 'Adresse E-mail *',
        'Check-in Date': 'Date d\'Arrivée',
        'Check-out Date': 'Date de Départ',
        'Number of Guests': 'Nombre d\'Invités',
        'Message': 'Message',
        'Send Inquiry': 'Envoyer la Demande',
        'Tell us about your ideal Alpine experience...': 'Parlez-nous de votre expérience alpine idéale...'
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeLanguageSelector();
    initializeInquiryForm();
    initializeLazyLoading();
    initializeScrollEffects();
    
    console.log('Chalet Tuftra website initialized successfully');
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Language selector functionality
function initializeLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
            
            // Update active state
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Set language function
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update elements with data attributes
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        const text = element.getAttribute('data-' + lang);
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Store language preference
    localStorage.setItem('chaletTuftraLanguage', lang);
    
    console.log('Language changed to:', lang);
}

// Load saved language
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('chaletTuftraLanguage');
    if (savedLang && ['en', 'de', 'fr'].includes(savedLang)) {
        setLanguage(savedLang);
        document.querySelector(`[data-lang="${savedLang}"]`).classList.add('active');
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') !== savedLang) {
                btn.classList.remove('active');
            }
        });
    }
}

// Inquiry modal functionality
function openInquiryModal() {
    const modal = document.getElementById('inquiryModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus on first input
        const firstInput = modal.querySelector('input[type="text"]');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeInquiryModal() {
    const modal = document.getElementById('inquiryModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('inquiryModal');
    if (event.target === modal) {
        closeInquiryModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeInquiryModal();
    }
});

// Initialize inquiry form
function initializeInquiryForm() {
    const form = document.getElementById('inquiryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleInquirySubmission(this);
        });
    }
}

// Handle inquiry form submission
function handleInquirySubmission(form) {
    const formData = new FormData(form);
    const inquiryData = {
        name: formData.get('name'),
        email: formData.get('email'),
        checkin: formData.get('checkin'),
        checkout: formData.get('checkout'),
        guests: formData.get('guests'),
        message: formData.get('message'),
        language: currentLanguage,
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        console.log('Inquiry submitted:', inquiryData);
        
        // Show success message
        showNotification('Thank you for your inquiry! We will contact you soon.', 'success');
        
        // Reset form and close modal
        form.reset();
        closeInquiryModal();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // In a real implementation, you would send this data to your server
        // Example: sendInquiryToServer(inquiryData);
        
    }, 2000);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Animate elements on scroll
    const animateOnScroll = document.querySelectorAll('.feature-card, .exp-feature');
    
    if ('IntersectionObserver' in window) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animateOnScroll.forEach(el => {
            el.style.opacity = '0';
            scrollObserver.observe(el);
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize on load
window.addEventListener('load', function() {
    loadSavedLanguage();
});

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Global functions for button clicks
window.openInquiryModal = openInquiryModal;
window.closeInquiryModal = closeInquiryModal;

console.log('Chalet Tuftra script loaded successfully');
