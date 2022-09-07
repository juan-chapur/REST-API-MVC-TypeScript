import { Router } from "express";
import { getItems } from "../controllers/item";

const router = Router();

router.get("/", getItems);

export { router };
