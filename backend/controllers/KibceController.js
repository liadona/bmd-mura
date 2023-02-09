import Kibce from "../models/KibceModel.js";
 
export const getKibces = async (req, res) => {
    try {
        const kibce = await Kibce.find();
        res.json(kibce);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getKibceById = async (req, res) => {
    try {
        const kibce = await Kibce.findById(req.params.id);
        res.json(kibce);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveKibce = async (req, res) => {
    const kibce = new Kibce(req.body);
    try {
        const insertedkibce = await kibce.save();
        res.status(201).json(insertedkibce);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateKibce = async (req, res) => {
    try {
        const updatedkibce = await Kibce.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedkibce);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteKibce = async (req, res) => {
    try {
        const deletedkibce = await Kibce.deleteOne({_id:req.params.id});
        res.status(200).json(deletedkibce);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}