import express, { static as exStatic } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

// mongoose connecion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body-parser setup
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

routes(app);

// serve static files
app.use(exStatic('public'));

app.get('/', (req, res) =>
  res.send(`Node and Express server running on port: ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port: ${PORT}`));
