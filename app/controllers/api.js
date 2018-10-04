Cart = require('../models/cart');


module.exports.addPackage = function(req, res) {
    var package  = req.body;
    Cart.addItem(package, function(err, customer){
        if(err){
            res.json({ message: err.message});
        }
        else{
            res.json({message:'Package is added'})
        }
    });
 
}

module.exports.getPackage = function(req, res) {
    var userId = req.params._id;
    Cart.getItems(userId, function(err, items){
        if(err){
            res.json({ message: err.message});
        }
        else{
            if(items.length == 0){
                res.json({ message: 'Empty Cart'})
            }
            else{
              res.json(items);
            }  
        }
    });
 
}

module.exports.updatePackage = function(req, res) {
    var package  =req.body;
    var id = req.params._id;
    Cart.getItem(id, function(err, item){
        if(err){
            res.json({ message: err.message});
        }
        else{
            Cart.updateItem(item._id, item.productUnitPrice, package, function(err){
                if(err){
                    res.json({ message: err.message});
                }
                else{
                    
                    res.json({message:'Package is updated'})
                }
            });
        }
    });
 
}

module.exports.removePackage = function(req, res) {
    var id = req.params._id;
    Cart.removeItem(id, function(err){
        if(err){
            res.json({ message: err.message});
        }
        else{
            res.json({message:'Package is removed'})
        }
    });
 
}


