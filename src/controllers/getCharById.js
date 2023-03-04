const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/';

const getChatById = async (req, res) => {
	const { id, name, species, image, gender } = req.params;
	 	try{
			const data = await axios.get(`${URL}${id}`);
			const character = {
				id:data.id,
				name:data.name,
				image: data.image,
				species: data.species
			};
			res.status(200).json(character);
			// return response.data;
		}catch(err){
			res.status(500).json(err.message);
		}
	
	


}
	// const getCharById = (res, id) => {
	// cons	axios(`https://rickandmortyapi.com/api/character/${id}`)
	// 		.then(response => response.data)
	// 		.then(data => {
	// 			let character = {
	// 				id: data.id,
	// 				name: data.name,
	// 				image: data.image,
	// 				gender: data.gender,
	// 				species: data.species
	// 			}
	// 			res
	// 			.writeHead(200, {'content-type': 'application/json'})
	// 			.end(JSON.stringify(character))
	// 		})
	// 		.catch(err => 
	// 			res
	// 			.writeHead(500, {'content-type': 'text-plain'})
	// 			.end(`El personaje con el id: ${id} no fue encontrado`)
	// 		)
	// }

	module.exports = getChatById;