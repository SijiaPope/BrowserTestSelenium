const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//  这个table只define了一个东西就是username， username里面的东西都是对username的限制和定义
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;