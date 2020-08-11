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
    let item_id = req.body.id;

    try {
        let item = await Items.findById({ _id : item_id });
        console.log(item);
        if(!item)
            return res.status(400).send({ error: errors.type1 });
    
        if(item.ownerId == creator_id){
            await Items.findByIdAndDelete( item_id );
            return res.send({ message: `Deleted`});
        }
        return res.status(500).send({ error : `No match but went through`});
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error : errors.type2 });
    }
});

module.exports = router;