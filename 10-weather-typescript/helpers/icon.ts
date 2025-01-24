import {IWeatherIcon} from "../types";

const BASE_ICON_URL = 'https://openweathermap.org/img/wn';

export const getIconUrl = (iconCode: IWeatherIcon) => `${BASE_ICON_URL}/${iconCode}@2x.png`;
