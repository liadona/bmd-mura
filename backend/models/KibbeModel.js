import mongoose from "mongoose";
 
const Kibbe = mongoose.Schema({
    kodebmd:{
        type: String,
        required: true
    },
    nama:{
        type: String,
        required: true
    },
    merk:{
        type: String,
        required: true
    },
    thnoleh:{
        type: String,
        required: true
    },
    nounik:{
        type: String,
        required: true
    },
    hargaoleh:{
        type: String,
        required: true
    },
    nobpkb:{
        type: String,
        required: true
    },
    opd:{
        type: String,
        required: true
    },
    pemegang:{
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
 
export default mongoose.model('Kibbes', Kibbe);