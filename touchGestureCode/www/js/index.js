<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#swiperightpage').on("swiperight",function(){ 
		console.log("swiperight");
		$.mobile.navigate( "#pagetwo" );
	
	})
	
});

	// -----------------------------------------
	
$(document).on("pagecreate","#pagetwo",function(){
	
		$('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'blue');
	}) 	
	
		$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 
	
		$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	})
	
	$('#swipeleftpage').on("swipeleft",function(){
		$.mobile.navigate( "#pageone" );
	})


});