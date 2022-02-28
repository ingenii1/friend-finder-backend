const bcrypt = require('bcryptjs');

exports.hashPass = async (req, res, next) =>{
    try {
        hashedPass = await bcrypt.hash(req.body.password, 8);
        req.body.password = hashedPass;
        next();
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}