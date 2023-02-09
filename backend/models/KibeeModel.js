import mongoose from "mongoose";
 
const Kibee = mongoose.Schema({
    kodebmd:{
        type: String,
        required: true
    },
    nama:{
        type: String,
        required: true
    },
    jenis:{
        type: String,
        required: true
    },
    jumlah:{
        type: String,
        required: true
    },
    opd:{
        type: String,
        required: true
    },
    guna:{
        type: String,
        required: true
    },
    thnoleh:{
        type: String,
        required: true
    },
    harga:{
        type: String,
        required: true
    },
    
    nounik:{
        type: String,
        required: true
    },
    keterangan:{
        type: String,
        required: true
    },
    historis:{
        type: String,
        required: true
    },
    file:{
        type: String,
        required: true
    }

});
 
export default mongoose.model('Kibees', Kibee);