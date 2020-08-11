//  Libiaries
const router = require('express').Router();
const mongoose = require('mongoose');
//  Schema
const Users = require('../../models/users')
const Items = require('../../models/items')
//  Function
const verify = require('../verifyUser')
//  Error handles
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
        //  Deletes user
        await Users.deleteOne({ _id });
        //  Deletes past post from user
        await Items.deleteMany({ ownerId: _id });
        return res.send({ message : `Deleted`});
        //  TODO: SHOW POP-UP and REDIRECT TO HOME SCREEN
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error : errors.type2});
    }
});

module.exports = router;
