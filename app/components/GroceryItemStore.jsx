var dispatcher = require("./../dispatcherjs");
var helper = require('./../helpsrs/RestHelper.js');

function GroceryItemStore(){
  var listeners = [];
  var items = [];

  helper.get("api/items")
  .then(function(data){
  	items = data;
  	triggerListeners();
  })
  function getItems(){
  	return items;
  }

  function addGroceryItem(item){
  	items.push(item);
  	triggerListeners();

  }

  function onChange(listener){
  	listeners.push(listener);
  }

  function triggerListeners(){
  	changeListeners.forEach(function(listener){
  	  listener(items);
  	});
  }

  dispatcher.register(function(event){
  	var split = event.type.split(':');
  	if(split[0] === 'grocery-item'){
  	  // switch (split[1]) {
  	  //   case: "add":
  	  //     addGroceryItem(event.payload);
  	  //     break;
  	  // }
  	}
  });

  return {
  	getItems: getItems,
  	onChange: onChange
  }

}

module.exports = new GroceryItemStore();