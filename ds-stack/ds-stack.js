var Stack = function() {
    this._storage =[];
    var counter=0;
    this.add = function(value){
    	this._storage.push(value);
    	counter++;
      // write me
    };
    this.remove = function() {
    	var val=this._storage[value];
    	this._storage.pop();
    	counter--;
    	return val;
      // write 	me
    };
  };