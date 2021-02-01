const mockApiResponse = {
    cod: 200,
    name: 'Angra dos Reis',
    main: {
      temp: 28,
      temp_max: 30,
      temp_min: 24,
      feels_like: 29,
      humidity: 72
    },
    weather: [
      {
        description: 'few clouds',
        main: 'Clouds',
        icon: '03d',
      },
    ],
    sys: {
      country: 'BR',
    },
    wind: {
      speed: 4,
      deg: 130
    }
  };
  
  export default mockApiResponse;