import { Router } from "express";
import { createItem, getItem, getItems, updateItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getItems);
router.get("/:id", logMiddleware, getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
