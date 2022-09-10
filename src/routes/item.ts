import { Router } from "express";
import { createItem, getItem, getItems, updateItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middlewares/log";
import { checkJwt } from "../middlewares/session"

const router = Router();

router.get("/", checkJwt, getItems);
router.get("/:id", logMiddleware, getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
