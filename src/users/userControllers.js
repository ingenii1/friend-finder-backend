const User = require('./userModel');
const bcrypt = require('bcryptjs');
exports.addUser = async (req, res)=>{
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            age: req.body.age,
            city: req.body.city,
            country: req.body.country
        });
        console.log(newUser)
        res.status(200).send({user: newUser});
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