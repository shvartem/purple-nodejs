import axios from 'axios';
import {IWeatherData} from '../types';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async ({city, token}: {city: string; token: string}) => {
    try {
        const response = await axios.get<IWeatherData>(`${BASE_URL}?q=${city}&appid=${token}&units=metric&lang=ru`);

        return response.data;
    } catch (error) {
        throw error;
    }
};
