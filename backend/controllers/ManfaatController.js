import Manfaat from "../models/ManfaatModel.js";
 
export const getManfaats = async (req, res) => {
    try {
        const manfaat = await Manfaat.find();
        res.json(manfaat);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getManfaatById = async (req, res) => {
    try {
        const manfaat = await Manfaat.findById(req.params.id);
        res.json(manfaat);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveManfaat = async (req, res) => {
    const manfaat = new Manfaat(req.body);
    try {
        const insertedmanfaat = await manfaat.save();
        res.status(201).json(insertedmanfaat);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateManfaat = async (req, res) => {
    try {
        const updatedmanfaat = await Manfaat.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedmanfaat);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteManfaat = async (req, res) => {
    try {
        const deletedmanfaat = await Manfaat.deleteOne({_id:req.params.id});
        res.status(200).json(deletedmanfaat);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}