const axios = require("axios");



class WeatherAPI {
    
    constructor() {
        this.city = 'Paris';
        // this.options = this.getOptions();
    }

    getOptions() {
        return {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: this.city},
            headers: {
              'X-RapidAPI-Key': '', /* Mettez ici votre clé d'API */
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    }
  
    async requestWeather(options) {
        // console.log(options);
        return await axios.request(options).then(function (response) {
            console.log(response.data);
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }

    async displayCurrentWeather(params) {
        let weather = await this.requestWeather(this.getOptions());
        let infoToDisplay = [];
        params.forEach(param => {
            infoToDisplay.push({param: param, value: weather.current[param]});
            // console.log(`${param} à ${this.city} :  ${infoToDisplay}`); //${weather.current.wind_kph}
        });
        return infoToDisplay;
    }
  
  }
  
  module.exports = WeatherAPI;
