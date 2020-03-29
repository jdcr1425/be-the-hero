const conecction = require('../Database/conecction');
const crypto = require('crypto');

module.exports ={

async create(req, res){
    const {title, description, value} = req.body;

    const ong_id =req.headers.auth;

    const [id] = await conecction('incidents').insert({
        title,
        description,
        value,
        ong_id
    });

    return res.json({id});
}
,
async index(req, res){
const {page = 1} = req.query;

    const [count] = await conecction('incidents').count();
    console.log(count);

    const incidents = await conecction('incidents').
    join('ongs', 'ongs.id', '=', 'incidents.ong_id').
    limit(5).
    offset((page - 1)*5).
    select(['incidents.*', 'ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);

    res.header('X-total-count', count['count(*)']);

    return res.json(incidents);
}

,
async IncidentsByOng(req, res){

    const ong_id =req.headers.auth;

    const incidents = await conecction("incidents").
    where('ong_id', ong_id)
    .select("*");

    return res.json(incidents);
},

async delete(req, res){
    const {id} = req.params;
    const ong_id =req.headers.auth;


    const incidents = await conecction('incidents')
    .where('id', id)
    .select('ong_id')
    .first();

    if(incidents.ong_id != ong_id){
        //401: not authorized
        return res.status(401).json({error: 'Operation not permitted'});
    }

    await conecction('incidents').where('id', id).delete();
    //204 no content
    return res.status(204).send();
}

}