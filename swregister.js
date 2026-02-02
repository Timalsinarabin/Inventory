
const APP={
    deferredInstall: null,
    init(){
        if('serviceWorker' in navigator){
            navigator.serviceWorker.register('./sw.js',{
                scope: '/Inventory/'
            }).then(registration=>{
                APP.SW = registration.installing || 
                        registration.waiting ||
                        registration.active;
                console.log('service worker registered',registration.scope);
            })
            navigator.serviceWorker.addEventListener('message',({data})=>{
                console.log("message from service worker",data);
            });
        }
        else{
            console.log("service workers are not supported");
        }
        
    },
};

document.addEventListener('DOMContentLoaded',APP.init);