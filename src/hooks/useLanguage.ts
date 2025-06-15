
import { useState, useEffect } from 'react';

export type Language = 'en' | 'de' | 'fr';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    experiences: 'Experiences',
    contact: 'Contact',
    make_inquiry: 'Make an Inquiry',
    
    // Hero Section
    hero_title: 'Where Luxury Meets Alpine Authenticity',
    hero_subtitle: 'Experience the perfect harmony of space, view, and light at Chalet Tuftra - your exclusive gateway to Matterhorn magic',
    reserve_escape: 'Reserve Your Alpine Escape',
    explore_chalet: 'Explore the Chalet',
    
    // Features
    matterhorn_views: 'Matterhorn Views',
    matterhorn_views_desc: 'Wake up to breathtaking panoramic views of the iconic Matterhorn from every window',
    space_light: 'Space & Light',
    space_light_desc: 'Thoughtfully designed interiors flooded with natural light create an atmosphere of serene luxury',
    family_hub: 'Family Hub',
    family_hub_desc: 'Spacious layouts perfect for multi-generational gatherings and creating lifelong memories',
    
    // Experience Section
    alpine_sanctuary: 'Your Alpine Sanctuary Awaits',
    alpine_sanctuary_desc: 'More than accommodation - it\'s your home in the heart of the Alps',
    winter_wonderland: 'Winter Wonderland',
    winter_wonderland_desc: 'Ski-in, ski-out access to world-class slopes with cozy après-ski comfort',
    summer_serenity: 'Summer Serenity',
    summer_serenity_desc: 'Alpine hiking trails and peaceful mountain air with luxury bed & breakfast service',
    corporate_excellence: 'Corporate Excellence',
    corporate_excellence_desc: 'Inspiring meeting spaces where innovation flourishes in Alpine tranquility',
    begin_journey: 'Begin Your Journey',
    
    // CTA Section
    ready_experience: 'Ready to Experience Alpine Luxury?',
    ready_experience_desc: 'Let us craft your perfect Alpine escape. From family celebrations to corporate retreats, your extraordinary experience begins with a single inquiry.',
    make_inquiry_today: 'Make Your Inquiry Today',
    
    // Footer
    luxury_sanctuary: 'Your luxury Alpine sanctuary in the heart of Zermatt',
    partnership: 'Partnership',
    managed_partnership: 'Managed in partnership with',
    rights_reserved: 'All rights reserved',
    
    // Modal
    full_name: 'Full Name',
    email_address: 'Email Address',
    checkin_date: 'Check-in Date',
    checkout_date: 'Check-out Date',
    number_guests: 'Number of Guests',
    message: 'Message',
    send_inquiry: 'Send Inquiry',
    message_placeholder: 'Tell us about your ideal Alpine experience...',
    required: 'Required',
    select_guests: 'Select number of guests',
    guests_1_4: '1-4 guests',
    guests_5_8: '5-8 guests',
    guests_9_12: '9-12 guests',
    guests_13_plus: '13+ guests'
  },
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über uns',
    experiences: 'Erlebnisse',
    contact: 'Kontakt',
    make_inquiry: 'Anfrage stellen',
    
    // Hero Section
    hero_title: 'Wo Luxus auf Alpine Authentizität trifft',
    hero_subtitle: 'Erleben Sie die perfekte Harmonie von Raum, Aussicht und Licht im Chalet Tuftra - Ihr exklusiver Zugang zur Matterhorn-Magie',
    reserve_escape: 'Reservieren Sie Ihren Alpine Rückzugsort',
    explore_chalet: 'Erkunden Sie das Chalet',
    
    // Features
    matterhorn_views: 'Matterhorn Blick',
    matterhorn_views_desc: 'Erwachen Sie mit atemberaubenden Panoramablicken auf das ikonische Matterhorn aus jedem Fenster',
    space_light: 'Raum & Licht',
    space_light_desc: 'Durchdacht gestaltete Innenräume, durchflutet von natürlichem Licht, schaffen eine Atmosphäre ruhigen Luxus',
    family_hub: 'Familien-Zentrum',
    family_hub_desc: 'Geräumige Grundrisse, perfekt für Mehrgenerationen-Treffen und das Schaffen lebenslanger Erinnerungen',
    
    // Experience Section
    alpine_sanctuary: 'Ihr Alpine Refugium erwartet Sie',
    alpine_sanctuary_desc: 'Mehr als Unterkunft - es ist Ihr Zuhause im Herzen der Alpen',
    winter_wonderland: 'Winter Wunderland',
    winter_wonderland_desc: 'Ski-in, Ski-out Zugang zu Weltklasse-Pisten mit gemütlichem Après-Ski Komfort',
    summer_serenity: 'Sommer Gelassenheit',
    summer_serenity_desc: 'Alpine Wanderwege und friedliche Bergluft mit luxuriösem Bed & Breakfast Service',
    corporate_excellence: 'Corporate Exzellenz',
    corporate_excellence_desc: 'Inspirierende Tagungsräume, wo Innovation in alpiner Ruhe gedeiht',
    begin_journey: 'Beginnen Sie Ihre Reise',
    
    // CTA Section
    ready_experience: 'Bereit, Alpine Luxus zu erleben?',
    ready_experience_desc: 'Lassen Sie uns Ihren perfekten Alpine Rückzugsort gestalten. Von Familienfeiern bis zu Corporate Retreats, Ihr außergewöhnliches Erlebnis beginnt mit einer einzigen Anfrage.',
    make_inquiry_today: 'Stellen Sie heute Ihre Anfrage',
    
    // Footer
    luxury_sanctuary: 'Ihr luxuriöses Alpine Refugium im Herzen von Zermatt',
    partnership: 'Partnerschaft',
    managed_partnership: 'Verwaltet in Partnerschaft mit',
    rights_reserved: 'Alle Rechte vorbehalten',
    
    // Modal
    full_name: 'Vollständiger Name',
    email_address: 'E-Mail-Adresse',
    checkin_date: 'Anreisedatum',
    checkout_date: 'Abreisedatum',
    number_guests: 'Anzahl der Gäste',
    message: 'Nachricht',
    send_inquiry: 'Anfrage senden',
    message_placeholder: 'Erzählen Sie uns von Ihrem idealen Alpine Erlebnis...',
    required: 'Erforderlich',
    select_guests: 'Anzahl der Gäste auswählen',
    guests_1_4: '1-4 Gäste',
    guests_5_8: '5-8 Gäste',
    guests_9_12: '9-12 Gäste',
    guests_13_plus: '13+ Gäste'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À Propos',
    experiences: 'Expériences',
    contact: 'Contact',
    make_inquiry: 'Faire une Demande',
    
    // Hero Section
    hero_title: 'Où le Luxe Rencontre l\'Authenticité Alpine',
    hero_subtitle: 'Découvrez l\'harmonie parfaite de l\'espace, de la vue et de la lumière au Chalet Tuftra - votre porte d\'entrée exclusive vers la magie du Cervin',
    reserve_escape: 'Réservez Votre Évasion Alpine',
    explore_chalet: 'Explorez le Chalet',
    
    // Features
    matterhorn_views: 'Vues sur le Cervin',
    matterhorn_views_desc: 'Réveillez-vous avec des vues panoramiques époustouflantes sur l\'emblématique Cervin depuis chaque fenêtre',
    space_light: 'Espace & Lumière',
    space_light_desc: 'Des intérieurs soigneusement conçus baignés de lumière naturelle créent une atmosphère de luxe serein',
    family_hub: 'Centre Familial',
    family_hub_desc: 'Des aménagements spacieux parfaits pour les rassemblements multigénérationnels et la création de souvenirs inoubliables',
    
    // Experience Section
    alpine_sanctuary: 'Votre Sanctuaire Alpin Vous Attend',
    alpine_sanctuary_desc: 'Plus qu\'un hébergement - c\'est votre maison au cœur des Alpes',
    winter_wonderland: 'Merveille d\'Hiver',
    winter_wonderland_desc: 'Accès ski aux pieds aux pistes de classe mondiale avec le confort douillet de l\'après-ski',
    summer_serenity: 'Sérénité Estivale',
    summer_serenity_desc: 'Sentiers de randonnée alpins et air pur de montagne avec service de luxe bed & breakfast',
    corporate_excellence: 'Excellence Corporative',
    corporate_excellence_desc: 'Des espaces de réunion inspirants où l\'innovation prospère dans la tranquillité alpine',
    begin_journey: 'Commencez Votre Voyage',
    
    // CTA Section
    ready_experience: 'Prêt à Découvrir le Luxe Alpin ?',
    ready_experience_desc: 'Laissez-nous créer votre évasion alpine parfaite. Des célébrations familiales aux retraites d\'entreprise, votre expérience extraordinaire commence par une simple demande.',
    make_inquiry_today: 'Faites Votre Demande Aujourd\'hui',
    
    // Footer
    luxury_sanctuary: 'Votre sanctuaire alpin de luxe au cœur de Zermatt',
    partnership: 'Partenariat',
    managed_partnership: 'Géré en partenariat avec',
    rights_reserved: 'Tous droits réservés',
    
    // Modal
    full_name: 'Nom Complet',
    email_address: 'Adresse E-mail',
    checkin_date: 'Date d\'Arrivée',
    checkout_date: 'Date de Départ',
    number_guests: 'Nombre d\'Invités',
    message: 'Message',
    send_inquiry: 'Envoyer la Demande',
    message_placeholder: 'Parlez-nous de votre expérience alpine idéale...',
    required: 'Requis',
    select_guests: 'Sélectionnez le nombre d\'invités',
    guests_1_4: '1-4 invités',
    guests_5_8: '5-8 invités',
    guests_9_12: '9-12 invités',
    guests_13_plus: '13+ invités'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('chaletTuftraLanguage') as Language;
    if (savedLanguage && ['en', 'de', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('chaletTuftraLanguage', newLanguage);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return { language, changeLanguage, t };
};
