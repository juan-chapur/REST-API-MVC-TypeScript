import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: String) => {
	return fileName.split(".")[0];
};

readdirSync(PATH_ROUTER).filter((fileName) => {
	const cleanName = cleanFileName(fileName);
	if (cleanName !== "index") {
		import(`./${cleanName}`).then((moduleRouter) => {
			console.log(`Se creo ruta: /${cleanName}`);
			router.use(`/${cleanName}`, moduleRouter.router);
		});
	}
});

export { router };