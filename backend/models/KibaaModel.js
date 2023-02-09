import mongoose from "mongoose";
 
const Kibaa = mongoose.Schema({
    kodebmd:{
        type: String,
        required: true
    },
    nama:{
        type: String,
        required: true
    },
    panjang:{
        type: String,
        required: true
    },
    lebar:{
        type: String,
        required: true
    },
    luas:{
        type: String,
        required: true
    },
    thnoleh:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    lang:{
        type: String,
        required: true
    },
    lat:{
        type: String,
        required: true
    },
    nosertifikat:{
        type: String,
        required: true
    },
    tglsertifikat:{
        type: String,
        required: true
    },
    guna:{
        type: String,
        required: true
    },
    opd:{
        type: String,
        required: true
    },
    sumber:{
        type: String,
        required: true
    },
    harga:{
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
 
export default mongoose.model('Kibaas', Kibaa);