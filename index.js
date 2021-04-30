import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose, { mongo } from 'mongoose';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology : true
});

app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res) => 
    res.send('Node and express server running on port ${PORT}')
);

app.listen(PORT, () => 
  console.log('Your Server is running on port ${PORT}')
);

routes(app);

