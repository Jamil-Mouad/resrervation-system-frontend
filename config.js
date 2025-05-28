// config.js - Configuration des URLs d'API
const config = {
    development: {
        API_BASE_URL: 'http://localhost:8082'
    },
    production: {
        API_BASE_URL: 'https://f3c1f0a8db54f44a054453982c23677c.serveo.net'
    }
};

// Détection automatique de l'environnement
const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';

const API_BASE_URL = isDevelopment ? config.development.API_BASE_URL : config.production.API_BASE_URL;

console.log('🌍 Environnement détecté:', isDevelopment ? 'développement' : 'production');
console.log('🔗 API URL utilisée:', API_BASE_URL);