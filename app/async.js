exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var deferred = $.Deferred();
  
  	setTimeout(function() {
      deferred.resolve(value);
    }, 100);

  	return deferred.promise();
  },

  manipulateRemoteData: function(url) {
  	var deferred = $.Deferred();
 
  	$.get(url,function(data){
  		var array = $.map(data.people, function(key){
  			return key.name;
  		})
  		deferred.resolve(array.sort());	
  	})
  	return deferred.promise();
  }
};
