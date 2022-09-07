import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { router } from "./routes";

const app = express();

app.use(cors());

app.use(router);

app.listen(PORT, () => {
	console.log("Corriendo en el puerto ", PORT);
});
