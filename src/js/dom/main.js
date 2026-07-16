import { capitalize } from "./common.js";

export function renderMain(city, data, unit) {
    document.getElementById('content').innerHTML = '';
    renderCurrentWeather(city, data.currentConditions, unit);
    renderWeatherForecast(city, data.days, unit);
}

function renderCurrentWeather(city, data, unit) {
    const tempDegree = unit === 'metric' ? '&deg; C' : '&deg; F';
    const currentWeatherWrapper = document.createElement('div');
    const currentWeatherHeader = document.createElement('h1');
    const currentWeatherBlock = document.createElement('div');
    const currentWeatherIcon = document.createElement('img');
    const currentInfo = document.createElement('div');
    const currentTemp = document.createElement('p');
    const currentFeelsLike = document.createElement('p');
    const currentHumidity = document.createElement('p');
    const currentPrecipprob = document.createElement('p');
    const currentWindSpeed = document.createElement('p');
    const currentPressure = document.createElement('p');
    const currentCloudcover = document.createElement('p');

    currentWeatherWrapper.classList.add('weather-wrapper');

    currentWeatherHeader.textContent = `Current weather in ${capitalize(city)}`;
    currentWeatherHeader.classList.add('weather-header');

    currentWeatherBlock.classList.add('current-weather-block', `bg-${data.icon}`);

    currentWeatherIcon.classList.add('current-weather-icon');
    currentWeatherIcon.src = `../../assets/icons/weather/${data.icon}.svg`;
    currentWeatherIcon.alt = 'Weather icon';

    currentInfo.classList.add('current-info');

    currentTemp.classList.add('current-text');
    currentTemp.innerHTML = `<b>Temperature:</b> ${data.temp} ${tempDegree}`;
    
    currentFeelsLike.classList.add('current-text');
    currentFeelsLike.innerHTML = `<b>Feels like:</b> ${data.feelslike} ${tempDegree}`;
    
    currentHumidity.classList.add('current-text');
    currentHumidity.innerHTML = `<b>Humidity:</b> ${data.humidity}%`;
    
    currentPrecipprob.classList.add('current-text');
    currentPrecipprob.innerHTML = `<b>Probability of precipitation:</b> ${data.precipprob}%`;
    
    currentWindSpeed.classList.add('current-text');
    currentWindSpeed.innerHTML = `<b>Wind speed:</b> ${data.windspeed} km/h`;
    
    currentPressure.classList.add('current-text');
    currentPressure.innerHTML = `<b>Pressure:</b> ${data.pressure} hPa`;
    
    currentCloudcover.classList.add('current-text');
    currentCloudcover.innerHTML = `<b>Cloudcover:</b> ${data.cloudcover}%`;

    currentInfo.append(currentTemp, currentFeelsLike, currentHumidity, currentPrecipprob, currentWindSpeed, currentPressure, currentCloudcover);

    currentWeatherBlock.append(currentWeatherIcon, currentInfo);
    
    currentWeatherWrapper.append(currentWeatherHeader, currentWeatherBlock);

    document.getElementById('content').append(currentWeatherWrapper);
}

function renderWeatherForecast(city, data, unit) {
    const tempDegree = unit === 'metric' ? '&deg; C' : '&deg; F';
    const weatherWrapper = document.createElement('div');
    const weatherHeader = document.createElement('h1');
    const weatherBlock = document.createElement('div');

    weatherWrapper.classList.add('weather-wrapper');

    weatherHeader.classList.add('weather-header');
    weatherHeader.textContent = `7-day weather forecast in ${capitalize(city)}`;

    weatherBlock.classList.add('weather-forecast-block');
    
    for (let i = 1; i <= 7; i++) {
        const forecastCard = document.createElement('div');
        const forecastIcon = document.createElement('img');
        const forecastInfo = document.createElement('div');
        const forecastTemp = document.createElement('p');
        const forecastFeelsLike = document.createElement('p');
        const forecastHumidity = document.createElement('p');
        const forecastPrecipprob = document.createElement('p');
        const forecastWindSpeed = document.createElement('p');
        const forecastPressure = document.createElement('p');
        const forecastCloudcover = document.createElement('p');

        forecastCard.classList.add('forecast-card', `bg-${data[i].icon}`);

        forecastIcon.classList.add('forecast-weather-icon');
        forecastIcon.src = `../../assets/icons/weather/${data[i].icon}.svg`;
        forecastIcon.alt = 'Weather icon';

        forecastInfo.classList.add('forecast-info');

        forecastTemp.classList.add('forecast-text');
        forecastTemp.innerHTML = `<b>Temperature:</b> ${data[i].temp} ${tempDegree}`;
        
        forecastFeelsLike.classList.add('forecast-text');
        forecastFeelsLike.innerHTML = `<b>Feels like:</b> ${data[i].feelslike} ${tempDegree}`;
        
        forecastHumidity.classList.add('forecast-text');
        forecastHumidity.innerHTML = `<b>Humidity:</b> ${data[i].humidity}%`;
        
        forecastPrecipprob.classList.add('forecast-text');
        forecastPrecipprob.innerHTML = `<b>Probability of precipitation:</b> ${data[i].precipprob}%`;
        
        forecastWindSpeed.classList.add('forecast-text');
        forecastWindSpeed.innerHTML = `<b>Wind speed:</b> ${data[i].windspeed} km/h`;
        
        forecastPressure.classList.add('forecast-text');
        forecastPressure.innerHTML = `<b>Pressure:</b> ${data[i].pressure} hPa`;
        
        forecastCloudcover.classList.add('forecast-text');
        forecastCloudcover.innerHTML = `<b>Cloudcover:</b> ${data[i].cloudcover}%`;

        forecastInfo.append(forecastTemp, forecastFeelsLike, forecastHumidity, forecastPrecipprob, forecastWindSpeed, forecastPressure, forecastCloudcover);

        forecastCard.append(forecastIcon, forecastInfo);
        
        weatherBlock.append(forecastCard);
    }

    weatherWrapper.append(weatherHeader, weatherBlock);

    document.getElementById('content').append(weatherWrapper);
}