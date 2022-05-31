const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: "Name must be required",
        trim: true
    },
    fname: {
        type: String,
        required: "Father name must be reqired",
        trim: true
    },
    age: {
        type: Number,
        default: 19
    },
    address: {
        type: String,
    },
    color: {
        type: String,
        default:[true,'black color']
    },
    date: {
        type: Date,
        default: Date.now()
    },
    page: {
        type:Number
    }
    
});
const User = mongoose.model('User', newSchema);
module.exports = User;