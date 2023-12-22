const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
    username: String,
    id: Number,
    surname: String,
    follower: Array,
    email: String,
    following: Array,
    password: Number,
    blockList: Array,
    notifications: Array,
    stories: Array,
    isPublic: Boolean,

    posts: [
        {
            imgID: { type: Number },
            tittle: { type: String },
            imgSRC: { type: String },

        }],
    bio: {
        info: String,
        country: String
    }
});

module.exports = mongoose.model("User", Userschema);
