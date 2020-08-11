//  Libiaries
const router = require('express').Router();
const mongoose = require('mongoose');
//  Schema
const Users = require('../../models/users')
//  Function
const verify = require('../verifyUser')

const errors = {
    type1: "ID doesn't exist",
    type2: "Server Issue"
}

router.delete("/", verify, async (req, res) => {
    let _id = req.user._id; 
    //  Confirms an id exist in database
    if(!await Users.findById( _id )){
        return res.status(400).send({ error : errors.type1});
    }

    try {
        await Users.deleteOne({ _id });
        return res.send({ message : `Deleted user`});
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error : errors.type2});
    }
    //  TODO: DELETE POST FROM THE USERS
});


module.exports = router;
