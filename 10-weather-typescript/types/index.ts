export interface UserConfig {
    token?: string | null
}

export const enum IWeatherIcon {
    CLEAR_SKY = '01d',
    FEW_CLOUDS = '02d',
    SCATTERED_CLOUDS = '03d',
    BROKEN_CLOUDS = '04d',
    SHOWER_RAIN = '09d',
    RAIN = '10d',
    THUNDERSTORM = '11d',
    SNOW = '13d',
    MIST = '50d',
}

export interface IWeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: IWeatherIcon;
        },
    ];
    base: 'stations';
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    rain?: {
        '1h': number;
    };
    snow?: {
        '1h': number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
