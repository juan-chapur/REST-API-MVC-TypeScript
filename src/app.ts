import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { router } from "./routes";
import dbConnect from "./config/mongo"

const app = express();
app.use(express.json())
app.use(cors());
app.use(router);

dbConnect().then(() => console.log("DB conectada"))

app.listen(PORT, () => console.log("Corriendo en el puerto ", PORT));
