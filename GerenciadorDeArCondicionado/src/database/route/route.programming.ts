import express from "express";
import { createMeneger, excludeMeneger, getListMeneger, getMenegerByEnvoronment, updateMeneger } from "../controller/controller.crud";
import { createEnvironment, excludeEnvironment, getEnvironmentOne, getListEnvironment, updateEnvironment } from "../controller/controller.environment.crud";

const router = express.Router() 

router.get("/getList", getListMeneger)
router.get("/getEnvironment/:environment", getMenegerByEnvoronment)
router.post("/create", createMeneger)
router.put("/update", updateMeneger)
router.delete("/exclude/:_id", excludeMeneger)

router.get("/getListEnvironment", getListEnvironment)
router.get("/getEnvironmentOne/:environment", getEnvironmentOne)
router.post("/createEnvironment", createEnvironment)
router.put("/updateEnvironment", updateEnvironment)
router.delete("/excludeEnvironment/:_id", excludeEnvironment)

export default router
