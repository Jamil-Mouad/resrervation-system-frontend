// config.js - Version finale CORRECTE
const config = {
    development: {
        API_BASE_URL: 'http://localhost:8082'
    },
    production: {
        API_BASE_URL: 'https://e16876d719e5cd2910669d497650794c.serveo.net'
    }
};

// Détection automatique de l'environnement
const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';

// ✅ DÉFINIR la variable API_BASE_URL
const API_BASE_URL = isDevelopment ? config.development.API_BASE_URL : config.production.API_BASE_URL;

console.log('🌍 Environnement détecté:', isDevelopment ? 'développement' : 'production');
console.log('🔗 API URL utilisée:', API_BASE_URL); 