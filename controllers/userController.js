const User = require("../models/User");

const index = (req, res, next) => {

    User.find()
        .then((result) => {
            res.json({
                data: result
            })
            console.log(result);
        })
        .catch((err) => {
            console.log(err)
        })
}

const create = (req, res, next) => {
    res.status(200).json("create page")
}

const insert = async (req, res, next) => {
    var us = new User(req.body)

    try {

        const result = await us.save(req.body);
        if (result) {
            console.log(result);
            return res.status(300).json(result);
        }

    } catch (err) {
        console.log(err)
        return res.status(200).json("something went wrong")
    }
    // await us.save(req.body)
    // .then((result)=>{

    //     return res.json({status:"data inserted successfully",data:result})
    //     next()

    // })
    // .catch((err)=>{

    //     res.json({statsu:"data not inserted"})
    //     console.log(err);

    // })
}

const update = async (req, res, next) => {


    try {

        const result = await User.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(result);

    } catch (err) {

        console.log(err);
        return res.json("something went wrong");
    }


}

const destroy = async (req, res, next) => {

    try{
        const result= await User.findByIdAndDelete(req.params.id);
        
        if(result){
            return res.json(result);
        }

    }catch(err){

        console.log(err)
        return res.json("something went wrong");
    }

}

const edit = (req, res, next) => {
    res.render('edit');
}

module.exports = {
    index,
    create,
    edit,
    insert,
    update,
    destroy
};