import express from "express";
import { 
    getKibbes, 
    getKibbeById,
    saveKibbe,
    updateKibbe,
    deleteKibbe
} from "../controllers/KibbeController.js";
 
const router = express.Router();
 
router.get('/kibbes', getKibbes);
router.get('/kibbes/:id', getKibbeById);
router.post('/kibbes', saveKibbe);
router.patch('/kibbes/:id', updateKibbe);
router.delete('/kibbes/:id', deleteKibbe);
 
export default router;