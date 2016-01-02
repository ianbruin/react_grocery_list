module.exports =  function(app){

  var GroceryItem = require('./../models/GroceryItem.js');

  // var items = [
  //   {
  //     name:"Ice Cream"
  //   },
  //   {
  //   	name: "Waffles"
  //   },
  //   {
  //   	name: "Candy",
  //   	purchased: true
  //   },
  //   {
  //   	name:"Cereal"
  //   },
  //   {
  //     name: "Cookies"
  //   }

  // ];
  app.route('/api/items')
  .get(function(req,res){
    // res.send(items);
    GroceryItem.find(function(error,doc){
      res.send(doc);
    });
  })
  .post(function(req,res){
    console.log("Adding item...", item);
    var item = req.body;
    // items.push(item);
    var groceryItem = new GroceryItem(item);
    groceryItem.save(function(err,data){
      res.status(300).send();
    });
  });

  app.route('/api/items/:id')
  .delete(function(req,res){
    GroceryItem.findOne({
      _id: req.params.id
    }).remove();
  })
  .patch(function(req, res){
    GroceryItem.findOne({
      _id: req.body._id
    }, function(error, doc){
      if(doc){
        for(var key in req.body){
          console.log(key);
          doc[key] = req.body[key];
        }
        doc.save();
      }
      res.status(200).send();
    });
  });
}