window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api: `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=85231a55fe5ab6d0678ed3a9d5189082`
        });
    }
});