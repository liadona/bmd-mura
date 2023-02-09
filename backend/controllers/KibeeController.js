import Kibee from "../models/KibeeModel.js";
 
export const getKibees = async (req, res) => {
    try {
        const kibee = await Kibee.find();
        res.json(kibee);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getKibeeById = async (req, res) => {
    try {
        const kibee = await Kibee.findById(req.params.id);
        res.json(kibee);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveKibee = async (req, res) => {
    const kibee = new Kibee(req.body);
    try {
        const insertedkibee = await kibee.save();
        res.status(201).json(insertedkibee);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateKibee = async (req, res) => {
    try {
        const updatedkibee = await Kibee.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedkibee);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteKibee = async (req, res) => {
    try {
        const deletedkibee = await Kibee.deleteOne({_id:req.params.id});
        res.status(200).json(deletedkibee);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}