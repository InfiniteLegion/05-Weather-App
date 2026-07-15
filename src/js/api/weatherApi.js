const key = 'BUE7B74VY3CCN7MQR7ZPU5V27';
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function getCityWeather(city, unit) {
    try {
        const response = await fetch(`${BASE_URL}/${city}?unitGroup=${unit}&key=${key}`);
        const data = await response.json();
        
        console.log(data);
        return data;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}