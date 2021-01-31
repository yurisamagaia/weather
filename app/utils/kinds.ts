const MESSAGES = {
    FEW_CLOUDS: "It's a good day to be outside, but be careful, there are some clouds.",
    CLOUDS: "It's a good day to be outside, but be careful, there are some clouds. Better to take an umbrella",
    CLEAR_SKY: "A perfect day to be outside and do your activities. Don't forget the sunscreen!",
    MIST: "There is fog outside. Be careful if you'll drive!",
    THUNDERSTOM: 'Be careful! There is a thunderstorm.',
    RAIN: "Don't forget your umbrella. It's raining!",
    RAIN_MODERATE: "It's a moderate rain, but be careful as it can get worse. Don't forget your umbrella!",
    SNOW: 'Take your jacket. There is snow outside!',
};

export const getWeatherKinds = (kind: string): string => {
    switch (kind) {
      case 'clear sky':
        return MESSAGES.CLEAR_SKY;
      case 'few clouds':
        return MESSAGES.FEW_CLOUDS;
      case 'scattered clouds':
        return MESSAGES.CLOUDS;
      case 'broken clouds':
        return MESSAGES.CLOUDS;
      case 'shower rain':
        return MESSAGES.RAIN;
      case 'moderate rain':
        return MESSAGES.RAIN_MODERATE;
      case 'light rain':
        return MESSAGES.RAIN_MODERATE;
      case 'thunderstorm':
        return MESSAGES.THUNDERSTOM;
      case 'snow':
        return MESSAGES.SNOW;
      case 'mist':
        return MESSAGES.MIST;
      default:
        return MESSAGES.CLOUDS;
    }
};

export const convertMetersToKm = (metersHour: number): string => (metersHour * 3.6).toFixed(0);