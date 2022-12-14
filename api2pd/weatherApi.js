const axios = require("axios");
const OSCServer = require("./oscServer");

const address = 'localhost';
const port = 3001;

const oscServer = new OSCServer(port, address);

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: 'Rennes'},
    headers: {
      'X-RapidAPI-Key': '', /* Metez ici votre clé d'API */
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    oscServer.sendMsg('wind', response.data.current.wind_kph);
}).catch(function (error) {
	console.error(error);
});