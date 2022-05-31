const query = require('express/lib/middleware/query');
const Test=require('./../models/testModels')
const AppError = require('./../utils/appError');
const catchasync = require('./../utils/catchasync');

exports.create_data = catchasync( async(req, res) => {
    
    const user = await Test.create(req.body);
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    });
    return next(new AppError('occure some error', 400));
    next();
});


exports.read_data = catchasync(async (req, res, next) => {
    
    const user = await Test.find();
    res.status(200).json({
        status: "success",
        result: user.length,
  date:Date.now(),
        data: {
            user
        }
    });
    return next(new AppError("can't find data", 400));
});


exports.delete_data = catchasync(async (req, res, next) => {
    const user = await Test.findByIdAndDelete(req.params.id)
    
    if (!user) {
        
        return next(new AppError("No user found that Id", 400));
    }
    res.status(200).json({
        status:"success",
        data: {
            user:null
        }
    })
});

exports.get_data = catchasync(async (req, res, next) => {
    const user = await Test.findById(req.params.id);
    if (!user) {
        return next(new AppError('No tour found with that ID', 404));
    }

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
});

exports.Update_data = catchasync(async (req, res,next) => {

    const update = await Test.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true
    });

    if (!update) {
        
        return next(new AppError("No User found with that ID",401));
    }

    res.status(200).json({
        status: "success",
        data: {
            update
        }
    });
});
