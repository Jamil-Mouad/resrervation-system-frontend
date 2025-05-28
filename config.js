// config.js - Version finale CORRECTE
const config = {
    development: {
        API_URL: 'http://localhost:8082'
    },
    production: {
        API_URL: 'https://880bc10889706e1b0e5de18654d0b1cf.serveo.net'
    }
};

// Détection automatique de l'environnement
const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';

// ✅ DÉFINIR la variable API_URL (pas API_BASE_URL)
const API_URL = isDevelopment ? config.development.API_URL : config.production.API_URL;

console.log('🌍 Environnement détecté:', isDevelopment ? 'développement' : 'production');
console.log('🔗 API URL utilisée:', API_URL);  // ✅ UTILISER API_URL (cohérent avec la définition)