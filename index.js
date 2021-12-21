const dotenv = require(`dotenv`);
dotenv.config();

const express = require(`express`);
const router = require(`./app/router`);

const app = express();
const PORT = process.env.PORT;

// app.set(`views`, `./app/views`);
// app.set(`view engine`, `ejs`);

//app.use(express.static(`./public`));
//app.use(express.urlencoded({extended: true}));

router.use((request, response) => {
    response.status(404).render(`404`);
});

app.use(router);

app.listen(PORT, () => {
    console.log(`✅ Server listening on http://localhost:${PORT}`);
});