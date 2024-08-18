export default function register() {
       if ('serviceWorker' in navigator) {
         window.addEventListener('load', () => {
           const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
     
           navigator.serviceWorker
             .register(swUrl)
             .then((registration) => {
               console.log('Service worker înregistrat:', registration);
             })
             .catch((error) => {
               console.error('Înregistrarea service worker-ului a eșuat:', error);
             });
         });
       }
     }