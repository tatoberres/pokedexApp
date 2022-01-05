const pokeCards = {

    getAllCards: (req, res) => {
        const pokedexJson = require('../data/pokedex.json');
        const data = {
            pokedexJson
        }
        res.render('index', data);
    },
    getDetail: (req, res, next) => {
        const pokedexJson = require('../data/pokedex.json');
        const numPoke = req.params.numPoke;
        console.log(req.params.numPoke);
        const unPoke = pokedexJson.find(pokemon => pokemon.numero == req.params.numPoke);
        console.log(unPoke);
        const data = {
            unPoke
        }
        res.render('detail', data);
        next();
    }


};

module.exports = pokeCards;