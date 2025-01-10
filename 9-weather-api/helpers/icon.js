const BASE_ICON_URL = 'https://openweathermap.org/img/wn';

export const getIconUrl = (iconCode) => `${BASE_ICON_URL}/${iconCode}@2x.png`;
