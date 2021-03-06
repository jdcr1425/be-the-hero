const conecction = require('../Database/conecction');
const crypto = require('crypto');
module.exports ={

    async index(req, res){
        const ongs = await conecction("ongs").select("*");

        return res.json(ongs);
    },




    async create(req, res){

    const {name, email, whatsapp, city, uf} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await conecction('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return res.json({"Id":id});
    }
}