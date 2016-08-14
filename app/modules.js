exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
  	return (function(){
  		var name = str2;
  		var greeting = str1; 

  		function sayIt(){
  		  return greeting + ', ' + name; 
  		}

  		return {
  			name: name,
  			greeting: greeting,
  			sayIt: sayIt
  		};
  	})();
  }
};
