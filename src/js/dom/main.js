import { capitalize } from "./common.js";

export function renderMain(city, data, unit) {
    document.getElementById('content').innerHTML = '';
    renderCurrentWeather(city, data.currentConditions, unit);
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

    currentWeatherWrapper.classList.add('current-wrapper');

    currentWeatherHeader.textContent = `Current weather in ${capitalize(city)}`;
    currentWeatherHeader.classList.add('current-header');

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