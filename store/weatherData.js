export const state = () => ({
  weatherInfos: {
    temp: '16',
    locationName: 'Londres',
    locationHumidity: '66',
    locationWindSpeed: '22.4',
    weatherStatusIcon: 'https://openweathermap.org/img/wn/01d.png',
    weatherDescription: 'Nublado',
  },
  locationImage: {
    fullImg: '/london-city.jpg',
    alt: 'Londres',
  },
  isError: false,
})

export const mutations = {
  setWeatherInfo(state, data) {
    state.weatherInfos = {
      temp: data.main.temp.toFixed(0),
      locationName: data.name,
      locationHumidity: data.main.humidity,
      locationWindSpeed: data.wind.speed,
      weatherStatusIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      weatherDescription: data.weather[0].description,
    }
  },
  setLocationImage(state, data) {
    state.locationImage = {
      fullImg: data.results[0].urls.full,
      regularImg: data.results[0].urls.regular,
      alt: data.results[0].alt_description,
    }
  },
}

export const actions = {
  async getWeatherInfos(context, search) {
    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=pt_br&units=metric&appid=30475479e2a19f72c8dc3eed197ef409`
      )
      const currentWeather = await request.json()
      context.commit('setWeatherInfo', currentWeather)
      context.state.isError = false
    } catch (err) {
      console.log('Local não existe!')
      return (context.state.isError = true)
    }
  },
  async getLocationImage(context, search) {
    const request = await fetch(
      `https://api.unsplash.com/search/photos?client_id=hN7_kal2KSmdEb8iIxZePXKio1wWTkzj1oeNtS7lGXk&page=1&query=${search}&orientation=landscape`
    )
    const locationImg = await request.json()
    console.log(locationImg.results[0].urls)
    context.commit('setLocationImage', locationImg)
  },
}

export const getters = {
  getInfos(state) {
    return state.weatherInfos
  },
  getErrors(state) {
    return state.isError
  },
}
