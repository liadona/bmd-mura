import express from "express";
import { 
    getManfaats, 
    getManfaatById,
    saveManfaat,
    updateManfaat,
    deleteManfaat
} from "../controllers/ManfaatController.js";
 
const router = express.Router();
 
router.get('/manfaats', getManfaats);
router.get('/manfaats/:id', getManfaatById);
router.post('/manfaats', saveManfaat);
router.patch('/manfaats/:id', updateManfaat);
router.delete('/manfaats/:id', deleteManfaat);
 
export default router;