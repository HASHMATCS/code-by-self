const query = require('express/lib/middleware/query');
const User = require('./../models/schemaModels');
const catchasync = require('./../utils/catchasync');



exports.create_bio_data = catchasync(async (req, res) => {

        const biodata = await User.create(req.body);
        
    
        res.status(200).json({
            status: "success",
            data: {
                biodata
            }
        });
   
});

exports.read_data = catchasync(async (req, res) => {
  
        // const readdata = await User.find({
        //     // name: 'sohul',
        //     // fname:'shafi'

        // },(el)=>{});
        const queryObj = { ...req.query };
        const arr = ['sort', 'page', 'limit', 'fields']
        arr.forEach(el => delete queryObj[el]);

        const readdata = await User.find().where('color').equals('red');
        
        
        res.status(200).json({
            status: "success",
            result: readdata.length,
            data: {
                readdata
            }
        });
  
});


exports.delete_data = catchasync(async (req, res) => {
   
        

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",
            data: null
        });

   
});


exports.Update_data = catchasync(async (req, res) => {
  
        const update = await User.findByIdAndUpdate(req.params.id, req.body);


        res.status(200).json({
            status: "success",
            data: {
                update
            }
        });
   
});

exports.getAggregationState = catchasync(async (req, res) => {
  
        const stats = await User.aggregate([
            {
                $match: { age: { $gt: 20 } }
            },

            {
                $group: {
                    _id: null,
                    numUser: { $sum: 1 },
                    avrAge: { $avg: '$age' },
                    minAge: { $min: '$age' },
                    maxAge: { $max: '$age' },
                    sumAllAge: { $sum: '$age' }
                
                }
            }
        ]);
        
        res.status(200).json({
            status: "success",
            data: {
                stats
            }
        });
    
});