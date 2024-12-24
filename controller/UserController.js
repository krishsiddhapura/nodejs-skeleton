const { User } = require('../models');
const Helper = require('../helpers/common');
const Response = new Helper();

exports.listUser = async (req, res) => {
    try{
        var response = await User.findAll({
            limit: parseInt(req.query.limit)||10,
            offset: parseInt(req.query.offset)||0,
        });

        return Response.sendResponse(res,"User List",response);
    }catch (error){
        return Response.sendError(res, error.message);
    }
}

exports.getUser = async (req, res)=> {
    try {
        let userId = req.params.id;
        var response = await User.findByPk(userId);
        if(response != null){
            return Response.sendResponse(res,"User Details",response);
        }else{
            return Response.sendError(res,"No data found",404);
        }
    }catch (error){
        return Response.sendError(res, error.message);
    }
}

exports.createUser = async (req, res)=> {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name, email, password
        });
        if(user != null){
            return Response.sendResponse(res, 'User has been added successfully !',user);
        }else{
            return Response.sendError("Failed to add user !");
        }
    }catch (error){
        return Response.sendError(res, error.message);
    }
}

exports.updateUser = async (req, res)=> {
    try {
        let id = req.params.id;
        const { name, email } = req.body;
        const update = await User.update({ name, email },{
            where: {
                id: id,
            },
        });

        if(update){
            let user = await User.findByPk(id);
            return Response.sendResponse(res, 'User has been update successfully !',user);
        }else{
            return Response.sendError("Failed to add user !");
        }
    }catch (error){
        return Response.sendError(res, error.message);
    }
}

