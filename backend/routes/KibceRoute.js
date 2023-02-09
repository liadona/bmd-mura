import express from "express";
import { 
    getKibces, 
    getKibceById,
    saveKibce,
    updateKibce,
    deleteKibce
} from "../controllers/KibceController.js";
 
const router = express.Router();
 
router.get('/kibces', getKibces);
router.get('/kibces/:id', getKibceById);
router.post('/kibces', saveKibce);
router.patch('/kibces/:id', updateKibce);
router.delete('/kibces/:id', deleteKibce);
 
export default router;