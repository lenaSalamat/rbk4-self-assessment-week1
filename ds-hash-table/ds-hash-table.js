var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        var pucket=this._storage[hashFn(key, max)];
        if(!pucket){
          pucket=[];
          this.pucket.push(this._storage[hashFn(key, max)])
        }
        for(var i=0;i<pucket.length;i++){
          var tuple=pucket[i];
          if(pucket[0]===key){
            tuple[1]=value;
      this._storage.push(pucket);
          }
        }
        //your code is here
        this._storage[hashFn(key, max)] = value;
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};