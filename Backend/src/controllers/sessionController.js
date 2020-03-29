const conecction = require('../Database/conecction');

module.exports = {

    async create (req,res){
        const {id} = req.body;

        const ong = await conecction('ongs').
        where('id', id)
        .select('name')
        .first();

        if(!ong){
            res.status(400).json({error:"No Ong found with this ID"});
        }

        return res.json(ong);
    }



};