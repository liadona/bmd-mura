import express from "express";
import { 
    getKibdes, 
    getKibdeById,
    saveKibde,
    updateKibde,
    deleteKibde
} from "../controllers/KibdeController.js";
 
const router = express.Router();
 
router.get('/kibdes', getKibdes);
router.get('/kibdes/:id', getKibdeById);
router.post('/kibdes', saveKibde);
router.patch('/kibdes/:id', updateKibde);
router.delete('/kibdes/:id', deleteKibde);
 
export default router;