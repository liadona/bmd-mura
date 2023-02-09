import mongoose from "mongoose";
 
const Manfaat = mongoose.Schema({
    kodemanfaat:{
        type: String,
        required: true
    },
    JenisManfaat:{
        type: String,
        required: true
    },
    pihaktiga:{
        type: String,
        required: true
    },
    awal:{
        type: String,
        required: true
    },
    ahir:{
        type: String,
        required: true
    },
    nilai:{
        type: String,
        required: true
    },
    nojanji:{
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
 
export default mongoose.model('Manfaats', Manfaat);