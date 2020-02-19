const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  这个table define了username， username里面的东西都是对username的限制和定义
const exerciseSchema = new Schema(
    {
        userName: {type: String, required: true},
        description: {type: String, required: true},
        duration: {type: Number, required: true},
        date:{type: Date, required: true}
    },
    {
        timestamps: true
    }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
 