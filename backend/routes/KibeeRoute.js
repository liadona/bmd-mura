import express from "express";
import { 
    getKibees, 
    getKibeeById,
    saveKibee,
    updateKibee,
    deleteKibee
} from "../controllers/KibeeController.js";
 
const router = express.Router();
 
router.get('/kibees', getKibees);
router.get('/kibees/:id', getKibeeById);
router.post('/kibees', saveKibee);
router.patch('/kibees/:id', updateKibee);
router.delete('/kibees/:id', deleteKibee);
 
export default router;