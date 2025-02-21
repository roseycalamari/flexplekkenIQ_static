/**
 * FlexPlekken IQ Translations
 * This file contains all the translations for the FlexPlekken IQ website.
 */

// Define translations in global scope (no const/let/var)
window.translations = {
    // English translations
    en: {
        tagline: "Improved Quality",
        banner: "<strong>Turn rentals into rewards!</strong> Get 50% of the rent, with €3,300 fueling your kickbacks.",
        concept: "Unique Concept in the Netherlands",
        description: "Become a member and supporter of Flex Workspaces, and receive the kickback fee.",
        costPrice: "Cost price per month: <strong>€2,200</strong>",
        aboveThreshold: "Everything above this amount is distributed pro-rata among members.",
        revenue: "Revenue:",
        threshold: "Above Threshold:",
        kickback: "Your Kickback:",
        flexWorkTitle: "Flex Workspaces",
        spacious: "Spacious workstations",
        internet: "High-speed internet",
        freeRooms: "Free meeting rooms",
        kickbackFee: "Monthly kickback fee",
        coffee: "Complimentary coffee/tea",
        benefits: "I.Q. participant benefits",
        maxPrice: "Max price: €230",
        yourPrice: "Your price: €115",
        flexOfficeTitle: "Flex Office",
        privateOffice: "Private office for 1-4 people",
        officeMaxPrice: "Max price: €470",
        officeYourPrice: "Your price: €235",
        meetingRooms: "Meeting Rooms",
        smallRoom: "Small Meeting Room",
        smallPeople: "For 1-4 people",
        smallPrice: "€12.50 per hour",
        largeRoom: "Large Meeting Room",
        largePeople: "For 4-8 people",
        largePrice: "€19.50 per hour",
        contact: "Email: schieland@schieland18.nl • Website: www.schieland18.nl • Contact: Max Nijman 0634 261817"
    },
    
    // Dutch translations
    nl: {
        tagline: "Improved Quality",
        banner: "<strong>Zet huur om in korting!</strong> Ontvang 50% terug bij een omzet van Euro 3.300,00",
        concept: "Uniek Concept in Nederland",
        description: "Word lid van Flex Werkplekken, en ontvang de kickback vergoeding.",
        costPrice: "Kostprijs per maand: <strong>€2.200</strong>",
        aboveThreshold: "Alles boven dit bedrag wordt pro-rata verdeeld onder de leden.",
        revenue: "Omzet:",
        threshold: "Boven Drempel:",
        kickback: "Uw Kickback:",
        flexWorkTitle: "Flex Werkplekken",
        spacious: "Ruime werkplekken",
        internet: "Snel internet",
        freeRooms: "Gratis vergaderruimtes",
        kickbackFee: "Maandelijkse kickback vergoeding",
        coffee: "Gratis koffie/thee",
        benefits: "I.Q. deelnemersvoordelen",
        maxPrice: "Max prijs: €230",
        yourPrice: "Uw prijs: €115",
        flexOfficeTitle: "Flex Kantoor",
        privateOffice: "Privé kantoor voor 1-4 personen",
        officeMaxPrice: "Max prijs: €470",
        officeYourPrice: "Uw prijs: €235",
        meetingRooms: "Vergaderruimtes",
        smallRoom: "Kleine Vergaderruimte",
        smallPeople: "Voor 1-4 personen",
        smallPrice: "€12,50 per uur",
        largeRoom: "Grote Vergaderruimte",
        largePeople: "Voor 4-8 personen",
        largePrice: "€19,50 per uur",
        contact: "Email: schieland@schieland18.nl • Website: www.schieland18.nl • Contact: Max Nijman 0634 261817"
    }
};

// Function to update all content with translations
function updateLanguage(lang) {
    const t = window.translations[lang];
    
    // Update tagline
    document.querySelector('.tagline').innerHTML = t.tagline;
    
    // Update banner
    document.querySelector('.highlight-banner p').innerHTML = t.banner;
    
    // Update concept area
    document.querySelector('.concept-area h2').innerHTML = t.concept;
    document.querySelector('.concept-area > p').innerHTML = t.description;
    
    // Update calculation descriptions
    document.querySelectorAll('.calc-description p')[0].innerHTML = t.costPrice;
    document.querySelectorAll('.calc-description p')[1].innerHTML = t.aboveThreshold;
    
    // Update calculation rows
    document.querySelectorAll('.calc-row span:first-child')[0].innerHTML = t.revenue;
    document.querySelectorAll('.calc-row span:first-child')[1].innerHTML = t.threshold;
    document.querySelector('.kickback-label').innerHTML = t.kickback;
    
    // Update flex workspaces card
    document.querySelectorAll('.card-header h3')[0].innerHTML = t.flexWorkTitle;
    document.querySelectorAll('.feature-list')[0].querySelectorAll('li')[0].innerHTML = `<i class="fas fa-check"></i> ${t.spacious}`;
    document.querySelectorAll('.feature-list')[0].querySelectorAll('li')[1].innerHTML = `<i class="fas fa-wifi"></i> ${t.internet}`;
    document.querySelectorAll('.feature-list')[0].querySelectorAll('li')[2].innerHTML = `<i class="fas fa-door-open"></i> ${t.freeRooms}`;
    document.querySelectorAll('.feature-list')[0].querySelectorAll('li')[3].innerHTML = `<i class="fas fa-euro-sign"></i> ${t.kickbackFee}`;
    document.querySelectorAll('.feature-list')[0].querySelectorAll('li')[4].innerHTML = `<i class="fas fa-coffee"></i> ${t.coffee}`;
    document.querySelectorAll('.feature-list')[0].querySelectorAll('li')[5].innerHTML = `<i class="fas fa-user-check"></i> ${t.benefits}`;
    document.querySelectorAll('.original-price')[0].innerHTML = t.maxPrice;
    document.querySelectorAll('.final-price')[0].innerHTML = t.yourPrice;
    
    // Update flex office card
    document.querySelectorAll('.card-header h3')[1].innerHTML = t.flexOfficeTitle;
    document.querySelectorAll('.feature-list')[1].querySelectorAll('li')[0].innerHTML = `<i class="fas fa-door-closed"></i> ${t.privateOffice}`;
    document.querySelectorAll('.feature-list')[1].querySelectorAll('li')[1].innerHTML = `<i class="fas fa-wifi"></i> ${t.internet}`;
    document.querySelectorAll('.feature-list')[1].querySelectorAll('li')[2].innerHTML = `<i class="fas fa-users"></i> ${t.freeRooms}`;
    document.querySelectorAll('.feature-list')[1].querySelectorAll('li')[3].innerHTML = `<i class="fas fa-euro-sign"></i> ${t.kickbackFee}`;
    document.querySelectorAll('.feature-list')[1].querySelectorAll('li')[4].innerHTML = `<i class="fas fa-coffee"></i> ${t.coffee}`;
    document.querySelectorAll('.feature-list')[1].querySelectorAll('li')[5].innerHTML = `<i class="fas fa-user-check"></i> ${t.benefits}`;
    document.querySelectorAll('.original-price')[1].innerHTML = t.officeMaxPrice;
    document.querySelectorAll('.final-price')[1].innerHTML = t.officeYourPrice;
    
    // Update meeting rooms card
    document.querySelectorAll('.card-header h3')[2].innerHTML = t.meetingRooms;
    document.querySelectorAll('.meeting-details h4')[0].innerHTML = t.smallRoom;
    document.querySelectorAll('.meeting-details p')[0].innerHTML = t.smallPeople;
    document.querySelectorAll('.meeting-price')[0].innerHTML = t.smallPrice;
    document.querySelectorAll('.meeting-details h4')[1].innerHTML = t.largeRoom;
    document.querySelectorAll('.meeting-details p')[1].innerHTML = t.largePeople;
    document.querySelectorAll('.meeting-price')[1].innerHTML = t.largePrice;
    
    // Update contact
    document.querySelector('.contact-info').innerHTML = t.contact;
}

// Set up the language toggle functionality when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const enOption = document.getElementById('en');
    const nlOption = document.getElementById('nl');
    const toggleSlider = document.querySelector('.toggle-slider');
    
    // Set up click handlers
    enOption.addEventListener('click', function() {
        enOption.classList.add('active');
        nlOption.classList.remove('active');
        toggleSlider.classList.remove('nl');
        updateLanguage('en');
    });
    
    nlOption.addEventListener('click', function() {
        nlOption.classList.add('active');
        enOption.classList.remove('active');
        toggleSlider.classList.add('nl');
        updateLanguage('nl');
    });
    
    // Initialize with English
    updateLanguage('en');
});