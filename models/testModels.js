const mongoose = require('mongoose');
// const validator = require('validator');
const UserSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
       
        // required: [true,'userId is required']
        // default:true


    },
    productId: {
        type: mongoose.Schema.ObjectId,
        type:Number,
        required: [true, 'prodecut id is required']
    },
    branchId: {
        type: Number,
        required: [true, " branch ID is required"]
    },
    rating: {
        type: String,
        lowercase: true,
        required:true
    },
    date: {
       type: Date,
        // default:true

    },
    static: {
        type: String,
        default:true,
    }
});

const Test = mongoose.model('Test', UserSchema);
module.exports = Test;