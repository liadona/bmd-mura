import Kibde from "../models/KibdeModel.js";
 
export const getKibdes = async (req, res) => {
    try {
        const kibde = await Kibde.find();
        res.json(kibde);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getKibdeById = async (req, res) => {
    try {
        const kibde = await Kibde.findById(req.params.id);
        res.json(kibde);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveKibde = async (req, res) => {
    const kibde = new Kibde(req.body);
    try {
        const insertedkibde = await kibde.save();
        res.status(201).json(insertedkibde);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateKibde = async (req, res) => {
    try {
        const updatedkibde = await Kibde.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedkibde);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteKibde = async (req, res) => {
    try {
        const deletedkibde = await Kibde.deleteOne({_id:req.params.id});
        res.status(200).json(deletedkibde);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}