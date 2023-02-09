import express from "express";
import { 
    getKibaas, 
    getKibaaById,
    saveKibaa,
    updateKibaa,
    deleteKibaa
} from "../controllers/KibaaController.js";
 
const router = express.Router();
 
router.get('/kibaas', getKibaas);
router.get('/kibaas/:id', getKibaaById);
router.post('/kibaas', saveKibaa);
router.patch('/kibaas/:id', updateKibaa);
router.delete('/kibaas/:id', deleteKibaa);
 
export default router;