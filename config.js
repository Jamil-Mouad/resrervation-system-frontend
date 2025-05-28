// config.js - Solution A : Tout en API_URL
const config = {
    development: {
        API_URL: 'http://localhost:8082'
    },
    production: {
        API_URL: 'https://f3c1f0a8db54f44a054453982c23677c.serveo.net'
    }
};

const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';

const API_URL = isDevelopment ? config.development.API_URL : config.production.API_URL;

console.log('🌍 Environnement détecté:', isDevelopment ? 'développement' : 'production');
console.log('🔗 API URL utilisée:', API_URL);