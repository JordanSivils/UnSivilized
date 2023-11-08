const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    pinCode:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
}, {timestamps: true});


userSchema.pre('save', async function (next)  {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// login user

userSchema.statics.login = async function(userName, password) {
    const user = await this.findOne({userName: userName});
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error('not working');
    }
    throw Error('username not found')
}

const User = new mongoose.model('User', userSchema);

module.exports = User