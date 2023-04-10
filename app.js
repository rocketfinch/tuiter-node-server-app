import express from 'express';
import cors from 'cors';
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'
console.log("CONNECTION_STRING", CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);

// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

const app = express();
app.use(cors());
app.use(express.json());
// app.get('/hello', (req, res) => { res.send('Life is good!') })
// app.get('/', (req, res) => { res.send('Welcome to Full Stack Development!') })
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);

console.log("Listening on port: ", process.env.PORT || 4000)
