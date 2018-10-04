var mongoose = require('mongoose');
//school schema
var cartSchema =  mongoose.Schema({
    userId: {
       type:String,
       required: true
    },
    packageType: {
        type:String,
        required: true
     },
    productUnitPrice: {
        type: Number,
        required: true
    },
    packageDuration: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
});

var Cart = module.exports = mongoose.model('Cartitems', cartSchema);


//database query
module.exports.addItem = function(package, callback){
    var total = package.productUnitPrice * package.packageDuration;
    console.log(total);
    console.log(package);
    Cart.create({
      userId : package.userId,
      packageType : package.packageType,  
      productUnitPrice : package.productUnitPrice,
      packageDuration : package.packageDuration,
      totalAmount : total
    }, callback); 
}

module.exports.updateItem = function(id,unitPrice,package, callback){
    var query ={
        _id : id
    }
    var total = package.packageDuration * unitPrice;
    var update = {
     packageDuration : package.packageDuration,
     totalAmount : total   
    }
    Cart.findOneAndUpdate(query,update,callback);
}

module.exports.getItem = function(id, callback){
    var query ={
        _id : id
    }
    Cart.findOne(query, callback);
}

module.exports.getItems = function(requestedUserId, callback){
    var query ={
        userId : requestedUserId
    }
    Cart.find(query, callback);
}

module.exports.removeItem = function(id, callback){
    var  query = {_id: id};    
    Cart.remove(query, callback);
}


