var EventBus = function(){
		
	var _subscribers = {};
		
	var _post = function(eventType, evt){
		
		if(_subscribers.length === 0){
			return;
		}else {
			
			var _specificSubscribers = _subscribers[eventType];
							
			for (var i = 0; i < _specificSubscribers.length; i++) {
				
				var _currentCallback = function(index) {
					
					
					setTimeout(function() {
 					var _currentCbk = _specificSubscribers[index];
 					_currentCbk(evt);
					
 				}, 10);
					
				};
				
			    _currentCallback(i);
			}
		}
	}
	
	var _subscribe = function(eventType, callback){
		
		if(typeof(callback) === "function"){
			
			if(typeof(_subscribers[eventType]) === "undefined"){
				_subscribers[eventType] = [];
			}
			
		_subscribers[eventType].push(callback);
		} else return;
	}
	
	return { "post": _post,
	
			"subscribe": _subscribe}
};

if (typeof (define) !== 'function') { 
	var define = require('amdefine')(module)
}


define(function() {
	return EventBus;
});