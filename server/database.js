var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function(){
  console.log("Connected to Mongodb");

  mongoose.connection.db.dropDatabase();

  var items = [
    {
      name:"Ice Cream"
    },
    {
    	name: "Waffles"
    },
    {
    	name: "Candy",
    	purchased: true
    },
    {
    	name:"Cereal"
    },
    {
      name: "Cookies"
    }

  ];

  console.log(items);

  items.forEach(function(item){
  	console.log("item", item);
  	new GroceryItem(item).save();
  });

})