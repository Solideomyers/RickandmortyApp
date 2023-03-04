
const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
	const { id, name, species, image, gender } = req.params;
	 	try{
			const data = await axios.get(`${URL}${id}`);
			const character = {
				id:data.id,
				name:data.name,
				image: data.image,
				species: data.species,
				origin: data.origin
			};
			res.status(200).json(character);
			// return response.data;
		}catch(err){
			res.status(500).json(`El personaje con el id: ${id} no fue encontrado`);
		}
	
}	
	

module.exports = getCharDetail;