const User = require('./userModel');
const bcrypt = require('bcryptjs');

var username = 'sa';

// To signup a new user
exports.addUser = async (req, res)=>{
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        console.log(newUser)
        res.status(200).send({user: newUser});
    } catch (error) {
        console.log(error)
        res.status(500).send({ err: error.message });
    }
}

// To ckeck password and allow users to login
exports.login = async (req, res)=>{
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if(user){
            const match = await bcrypt.compare(req.body.password, user.password);
            username = user.username;
            if(match){
                const username = user.username
                res.status(200).send({message: "login successfull"}); 
            }else{
                res.send({error: "login failed"})
            }
        } else{
            res.status(200).send({status: 'error', user: false}); 
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ err: error.message });
    }
}

//To add additional data after user logins
exports.userInfo = async (req, res)=>{
    try {
        const filter = { username: username };
        const update = {             
            gender: req.body.gender,
            age: req.body.age,
            city: req.body.city,
            country: req.body.country,
            activity: req.body.activity,
            intrests: req.body.intrests.split(',') };
        const newUser = await User.findOneAndUpdate(filter, update, {new: true});
        console.log(newUser)
        res.status(200).send({'user-details': newUser});
    } catch (error) {
        console.log(error)
        res.status(500).send({ err: error.message });
    }
}


exports.listUser = async (req, res) => {
    try {
        // const userList = await User.find({username: `${req.body.username}`});
        const userList = await User.find({});
        res.status(200).send({
            users: userList,
        });
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}


// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const result = await User.deleteOne({username: req.body.username});
        if(result){
            res.status(200).send({message: `${req.body.username} deleted successfully`});
        } else{
            res.status(500).send({message: `${req.body.username} not found`});
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}