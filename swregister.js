const APP = {
    deferredInstall: null,
    init() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/Inventory/sw.js')
                .then(registration => {
                    console.log('service worker registered', registration.scope);
                })
                .catch(err => console.log('SW registration failed:', err));

            navigator.serviceWorker.addEventListener('message', ({ data }) => {
                console.log("message from service worker", data);
            });
        } else {
            console.log("service workers are not supported");
        }
    },
};

document.addEventListener('DOMContentLoaded', APP.init);
