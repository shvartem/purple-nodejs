import {getIconUrl} from './icon.js';

export const parseWeather = (initialData) => {
    return {
        city: initialData.name,
        current_temp: {
            measure: initialData.main.temp,
            units: 'гр.',
        },
        feels_like: {
            measure: initialData.main.feels_like,
            units: 'гр.',
        },
        pressure: {
            measure: initialData.main.pressure,
            units: 'мм. рт.ст.',
        },
        humidity: {
            measure: initialData.main.humidity,
            units: '%',
        },
        visibility: {
            measure: initialData.visibility,
            units: 'м',
        },
        wind: {
            measure: initialData.wind,
            units: 'м/с',
        },
        weather: initialData.weather.map((weather) => ({
            description: weather.description,
            iconCode: weather.icon,
            iconUrl: getIconUrl(weather.icon),
        })),
    };
};
