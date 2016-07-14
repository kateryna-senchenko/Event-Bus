define(function(require) {

	
	var EventBus = require('./eventbus');


	var eb = EventBus();
	
	var fastSubscriber = function(e){
	
		console.log("Fast subscriber received: " + e);
	}
	
	var slowSubscriber = function(e){
	
		var result = 0;
		
		for(var i = 0; i < 10000000; i++){
			result = result + Math.random();
			
			if(i % 4 == 0){
				result = result / Math.random();
			}
		}
		console.log("Slow subscriber received: " + e);
		return result;
	}
	
	eb.subscribe("slow", slowSubscriber);
	eb.subscribe("fast", fastSubscriber);
	
	
	
	for( var i = 0; i < 10; i++){
		eb.post("slow", "event data #" + i);
		eb.post("fast", "event data #" + i);
		
	}


});		