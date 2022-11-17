const OSCServer = require('./osc-server');
const WeatherAPI = require('./weatherApi');

// adresse de la machine où envoyer les données OSC
const address = 'localhost';

// port sur lequel envoyer les données OSC
const port = 3001;

// temps de latence entre les requêtes pour chacune des villes
let delay = 1000;

/*
 * Instanciation des objets OSCServer (contient les fonctions d'envoi en OSC)
 * et WeatherAPI (contient les fonctions requêtant WeatherAPI)
 */
const oscServer = new OSCServer(port, address);
const weatherAPI = new WeatherAPI();

///// MAIN /////

// liste des villes pour lesquelles on veut obtenir les infos météo
let cities = ['Rennes' , 'Lorient', 'Quimper', 'Lannion'];

// liste des infos météo que l'on veut obtenir pour chacune des villes
let params = ['wind_kph', 'humidity', 'temp_c', 'precip_mm', 'pressure_mb', 'wind_dir'];

loopOnData(60, 60000);

///// FUNCTIONS /////

/**
 * Appelle la fonction requếtant WeatherAPI et envoyant la réponse en OSC
 * @param {int} nbIterations nombre de requêtes à effectuer
 * @param {int} delayBetweenIterations durée entre deux requêtes
 */
async function loopOnData(nbIterations, delayBetweenIterations) {
  for (let i=0; i<nbIterations; i++) {
    setTimeout( async function() {
      await sendWeatherInfo(cities, params, delay)
    }, delayBetweenIterations * i);
  }
}

/**
 * Envoie les données récupérées sur WeatherAPI en OSC
 * @param {Array[String]} cities villes dont on veut récupérer les données {params}
 * @param {Array[String]} params données que l'on veut récupérer pour chaque ville
 * @param {int} delay 
 */
async function sendWeatherInfo(cities, params, delay) {
  // test set
  windDataSet = [[ 12.6 ], [ 16.9 ], [ 16.9 ], [ 10.4 ], [ 9 ], [ 6.8 ], [ 6.8 ], [ 9 ]];
  let data = [];
  for (let i=0; i<cities.length; i++) {
    data.push(await getWeatherInfo(cities[i], params));
  }
  // console.log('data', data);

  for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].length; j++) {
      let value = data[i];
      let channel = `${cities[i]}/${value[j].param}`;
      senOscMsgWithTimeOut(channel, value[j].value, j, delay);
    }
  }
}

/**
 * Retourne les infos météo pour une ville
 * @param {String} city ville pour laquelle on souhaite obtenir les infos météo
 * @param {Array[String]} params informations météo que l'on souhaite obtenir
 * @returns infos météo pour une ville
 */
async function getWeatherInfo(city, params) {
  weatherAPI.city = city;
  let infos = await weatherAPI.displayCurrentWeather(params);
  return infos;
}

function senOscMsgWithTimeOut(channel, value, i, delay) {
 setTimeout(function() {
    oscServer.sendMsg(channel, value);
  }, delay * i);
}
