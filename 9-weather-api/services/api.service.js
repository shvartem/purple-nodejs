import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async ({city, token}) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${token}&units=metric&lang=ru`);

        return response.data;
    } catch (error) {
        throw error;
    }
};
