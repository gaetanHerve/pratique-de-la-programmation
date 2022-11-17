const OSCServer = require("./osc-server");
const WeatherAPI = require('./weatherApi');

const address = 'localhost';
const port = 3001;
let delay = 1000;
let cities = ['Rennes' , 'Lorient', 'Quimper', 'Lannion'];

// params: wind_kph, wind_dir, humidity, temp_c, precip_mm, pressure_mb

const oscServer = new OSCServer(port, address);
const weatherAPI = new WeatherAPI();

///// MAIN /////
let params = ['wind_kph', 'humidity', 'temp_c', 'precip_mm', 'pressure_mb', 'wind_dir'];

loopOnData();

async function loopOnData() {
  for (let i=0; i<60; i++) {
    setTimeout( async function() {
      await sendWeatherInfo(cities, params, delay)
    }, 60000 * i);
  }
}



///// FUNCTIONS /////

async function getWeatherInfo(city, params) {
  weatherAPI.city = city;
  let infos = await weatherAPI.displayCurrentWeather(params);
  return infos;
}

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
      senOscMsgWithTimeOut(channel, value[j].value, j, 1000);
    }
  }
}
 
function senOscMsgWithTimeOut(channel, value, i, delay) {
 setTimeout(function() {
    oscServer.sendMsg(channel, value);
  }, delay * i);
}
