var express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;
const bodyParser = require('body-parser')
const routes = require('./src/routes/crmRoutes')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
    console.log('Running di Port :' + PORT)
})  