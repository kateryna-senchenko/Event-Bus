
var EventBus = require('../scripts/eventbus');
var unitjs = require('unit.js');
var eb = EventBus();

var expectedDataFirst = "123";
var deliveredFirst = false;
var countSubscribersFirst = 0;

var expectedDataSecond = "abc";
var deliveredSecond = false;
var countSubscribersSecond = 0;

var expectedDataThird = "hey";
var deliveredThird = false;
var countSubscribersThird = 0;


eb.subscribe("first", function(e){
	
	deliveredFirst = (expectedDataFirst === e);
	
	if(deliveredFirst){
		countSubscribersFirst++;
	}
	
});

eb.subscribe("second", function(e){
	
	deliveredSecond = (expectedDataSecond === e);
	
	if(deliveredSecond){
		countSubscribersSecond++;
	}
	
});

eb.subscribe("third", function(e){
	
	deliveredThird = (expectedDataThird === e);
	
	if(deliveredThird){
		countSubscribersThird++;
	}
});

eb.post("first", expectedDataFirst);
eb.post( "second", expectedDataSecond);
eb.post( "second", expectedDataSecond);
eb.post( "third", expectedDataFirst); 




describe('Test delivery functionality', function() {
	
	it('First event delivered one time', function(){
		
		this.timeout(1000);
		unitjs.bool(deliveredFirst).isTrue();
		unitjs.number(countSubscribersFirst).is(1);

	});
	
	it('Second event delivered twice', function(){
		
		this.timeout(1000);
		unitjs.bool(deliveredSecond).isTrue();
		unitjs.number(countSubscribersSecond).is(2);

	});
	
	it('Third event not delivered', function(){
		
		this.timeout(1000);
		unitjs.bool(deliveredThird).isFalse();
		unitjs.number(countSubscribersThird).is(0);
		
	});
	
});

