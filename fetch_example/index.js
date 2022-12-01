import fetch from 'node-fetch';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1ad918ba5msh3c0ab9e6425505fp173eb1jsn7ddc110d1e29', // placez ici votre clé personnelle
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let data = await testFetch(options);
console.log('ma data: ', data);



async function testFetch(options) {
    let response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Rennes', options)
        .then(response => response.json())
        .catch(err => console.error(err));
    return response;
}


