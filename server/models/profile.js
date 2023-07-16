import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    balance: {type: Number, default: 0}
});

const Profile =  mongoose.model("Profile", ProfileSchema);

export default Profile;