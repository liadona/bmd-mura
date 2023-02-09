import Kibbe from "../models/KibbeModel.js";
 
export const getKibbes = async (req, res) => {
    try {
        const kibbe = await Kibbe.find();
        res.json(kibbe);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getKibbeById = async (req, res) => {
    try {
        const kibbe = await Kibbe.findById(req.params.id);
        res.json(kibbe);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveKibbe = async (req, res) => {
    const kibbe = new Kibbe(req.body);
    try {
        const insertedkibbe = await kibbe.save();
        res.status(201).json(insertedkibbe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateKibbe = async (req, res) => {
    try {
        const updatedkibbe = await Kibbe.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedkibbe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteKibbe = async (req, res) => {
    try {
        const deletedkibbe = await Kibbe.deleteOne({_id:req.params.id});
        res.status(200).json(deletedkibbe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}