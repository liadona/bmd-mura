import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import KibaaRoute from "./routes/KibaaRoute.js";
import KibbeRoute from "./routes/KibbeRoute.js";
import KibceRoute from "./routes/KibceRoute.js";
import KibdeRoute from "./routes/KibdeRoute.js";
import KibeeRoute from "./routes/KibeeRoute.js";
import ManfaatRoute from "./routes/ManfaatRoute.js";
 
const app = express();
mongoose.connect('mongodb://localhost:27017/bmd_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use(KibaaRoute);
app.use(KibbeRoute);
app.use(KibceRoute);
app.use(KibdeRoute);
app.use(KibeeRoute);
app.use(ManfaatRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));