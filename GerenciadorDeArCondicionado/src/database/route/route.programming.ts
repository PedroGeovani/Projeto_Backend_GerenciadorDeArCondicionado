import express from "express";
import { createMeneger, excludeMeneger, getListMeneger, getMenegerByEnvoronment, updateMeneger } from "../controller/controller.crud";

const router = express.Router() 

router.get("/getList", getListMeneger)
router.get("/getEnvironment", getMenegerByEnvoronment)
router.post("/create", createMeneger)
router.put("/update", updateMeneger)
router.delete("/exclude", excludeMeneger)

export default router