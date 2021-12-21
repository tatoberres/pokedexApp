const express = require(`express`);
const router = express.Router();
const client = require(`./db`);

const pokedex = require('./data/pokedex');
console.log(pokedex[0]);




module.exports = router;