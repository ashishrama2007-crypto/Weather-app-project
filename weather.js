    const inputBox = document.querySelector('.input-box');  
    const searchBtn = document.getElementById('searchBtn');
    const weather_img = document.querySelector('.weather-img');
    const description = document.querySelector('.description');
    const temp = document.querySelector('.temperature');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind-speed'); 
    const location_not_found = document.querySelector('.location-not-found');
    const weather_body = document.querySelector('.weather-body');

    async function checkWeather(city){
        const api_key = "9ca9ae89bc30f07122cb508273055831";
        const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        const weather_data = await fetch(`${url}`).then(response => response.json());

        if(weather_data.cod === '404'){
            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            console.log("error");
            return;
        }
        console.log("run");
        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
        temp.innerHTML = `${Math.round(weather_data.main.temp)}<sup>°C</sup>`;
        description.innerHTML = `${weather_data.weather[0].description}`;

        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind.innerHTML = `${weather_data.wind.speed}Km/Hr`;

        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src = "cloud.png";
                break;
            case 'Clear':
                weather_img.src = "clear.png";
                break;
            case 'Rain':
                weather_img.src = "rain.png";
                break;
            case 'Mist':
                weather_img.src = "mist.png";
                break;
            case 'Snow':
                weather_img.src = "snow.png";
                break;
        }
        console.log(weather_data);

        }
    searchBtn.addEventListener('click',()=>{
        checkWeather(inputBox.value);
    });