import Kibaa from "../models/KibaaModel.js";
 
export const getKibaas = async (req, res) => {
    try {
        const kibaa = await Kibaa.find();
        res.json(kibaa);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getKibaaById = async (req, res) => {
    try {
        const kibaa = await Kibaa.findById(req.params.id);
        res.json(kibaa);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveKibaa = async (req, res) => {
    const kibaa = new Kibaa(req.body);
    try {
        const insertedkibaa = await kibaa.save();
        res.status(201).json(insertedkibaa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateKibaa = async (req, res) => {
    try {
        const updatedkibaa = await Kibaa.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedkibaa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteKibaa = async (req, res) => {
    try {
        const deletedkibaa = await Kibaa.deleteOne({_id:req.params.id});
        res.status(200).json(deletedkibaa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}