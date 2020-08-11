//  Libaries 
const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../verifyUser");

//  Model
const Items = require("../../models/items");

const errors = {
    type1: "ID doesn't exist",
    type2: "Server Issue"
}

router.delete("/", verify, async (req, res) => {
    let creator_id = req.user._id;
    let item_id = req.body._id;
    let item = await Items.findOne({ item_id });

    if(!item)
        return res.status(400).send({ error: errors.type1 });

    try {
        if(item.ownerId == creator_id){
            await Items.findOneAndDelete( item_id );
            return res.send({ message: `Deleted ${item_id}`});
        }
        return res.status(500).send({ error : `No match but went through`});
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error : errors.type2 });
    }
});

module.exports = router;