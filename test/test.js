
var EventBus = require('../scripts/eventbus');
var test = require('unit.js');
var eb = EventBus();

var expectedDataFirst = "123";
var deliveredFirst = false;
var expectedDataSecond = "abc";
var deliveredSecond = false;

eb.subscribe("first", function(e){
	deliveredFirst = (expectedDataFirst == e);
});

eb.subscribe("second", function(e){
	deliveredSecond = (expectedDataSecond == e);
});

eb.post("first", expectedDataFirst);
eb.post( "second", expectedDataSecond);



describe('Post', function() {
	
	it('Posted  first event', function(){
		
		this.timeout(1000);
		test.bool(deliveredFirst).isTrue();

	});
	
	it('Posted  second event', function(){
		
		this.timeout(1000);
		test.bool(deliveredSecond).isTrue();

	});
	
});

