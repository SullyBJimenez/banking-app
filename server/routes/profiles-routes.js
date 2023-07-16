import express from "express";
import profileModel from '../models/profile.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const JWT_SECRET = "sgdf97f98euhruoqehrfnrqnler[qer-q97434k13gr79qet6rq";

const app = express();

app.get("/profiles", async(req, res) => {
    const profiles = await profileModel.find({})

    try{
        res.send(profiles)
    } catch (err) {
        res.status(500).send(err);
    }
})

app.post("/profile", async(req,res) => {
    const {email, name, password} = req.body;

    try{
        const existingEmail = await profileModel.findOne({email});
        if(existingEmail){
            return res.status(500).send({error: "Email already in use", status: 500})
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const profile = new profileModel({name, email, password: encryptedPassword});
        await profile.save();
        res.send(profile);
        } catch (err) {
        res.status(500).send(err);
        }
})

app.post("/profile-login", async(req,res) => {
    console.log("request: " , req)
    const {email,password} = req.body;

    const profile = await profileModel.findOne({email})
    if(!(await bcrypt.compare(password, profile.password))){
        return res.status(401).send({error: "Invalid Credentials", status: 401})
    } else {
        const token = jwt.sign({}, JWT_SECRET)
        if(res.status(201)){
            return res.json({status: "ok", data: token});
        } else {
            return res.json({error: "error"})
        }
    }

    
})

export default app;