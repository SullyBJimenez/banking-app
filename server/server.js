import  express  from "express";
import mongoose from "mongoose";
import profileRouter from "./routes/profiles-routes.js";
import cors from "cors";

const app = express();
const port = 2020;
const url = 'mongodb+srv://sullybjimenez:Et1qrPfzonmTYRW8@cluster0.ff08cbv.mongodb.net/';

app.use(express.json());
app.use(cors());

await mongoose.connect(url);

app.use(profileRouter);

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});

