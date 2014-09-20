// JavaScript Document


   $(document).ready(function()
   {         
      //
      // jQuery SmoothScroll | Version 18-04-2013
      //


      $('a[href*=#]').click(function() {

         // skip SmoothScroll on links inside sliders or scroll boxes also using anchors or if there is a javascript call
	
		 
        if($(this).parent().hasClass('scrollable_navigation') || $(this).attr('href').indexOf('javascript')>-1) return;

         // duration in ms
         var duration=1200;

         // easing values: swing | linear
         var easing='swing';
			
		 
         // get / set parameters
         var newHash=this.hash;
         var oldLocation=window.location.href.replace(window.location.hash, '');
         var newLocation=this;

         // make sure it's the same location      
         if(oldLocation+newHash==newLocation)
         {
			
			 
			
		
            // get target
            var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;
 			
            // adjust target for anchors near the bottom of the page
            if(target > $(document).height()-$(window).height()) target=$(document).height()-$(window).height();
			
			 
   
                  
       

            // animate to target and set the hash to the window.location after the animation
            $('html, body').delay(0).animate({ scrollTop : target }, duration, easing, function() {
			
			
			
               // add new hash to the browser location
               window.location.href=newLocation;
            });

            // cancel default click action
            return false;
         }
      });
   });
   

// JavaScript Document
$(document).ready(function(){
	
(function(window, document, $, undefined) {
	
$(window).load(sizeContent);


$(document).ready(sizeContent);



//////Load the resize of window//////

//////Every resize of window//////
$(window).resize(sizeContent);




//Dynamically assign height
function sizeContent() {
	
   var windowHeight = $(window).height();
   var windowWidth = $(window).width();
   var logoHeight = $("#sliderContent").height();
   var logoWidth = $("#sliderContent").width();
	var arrowHeight = $("#splasharrow").height();
	var logoHeight = $("#splashlogo").height();
	var paraHeight = $("#splashPara").height();

	$("#splashOuter").css("width", windowWidth);

	//$("#splashlogo").css("padding-top", ((splashHeight-(logoHeight*2))/2)-100);


	$("#splashOuter").css("height", windowHeight);
	$("#splashInner").css("height", windowHeight);


	if(windowHeight > 500){

	//$("#splashOuter").css("height", windowHeight);
	//$("#splashInner").css("height", windowHeight);
	}
	else if(windowHeight < 500){
		
	//$("#splashOuter").css("height", 500);
	//$("#splashInner").css("height", 500);	
	}

	
	var splashHeight = $("#splashOuter").height();
	
	$("#splasharrow").css("margin-top", splashHeight-(arrowHeight));
	$("#splashPara").css("margin-top", (splashHeight-((paraHeight-logoHeight)+50))/2);
	$("#splashlogo").css("margin-top", (splashHeight-((logoHeight+paraHeight)+50))/2);
	/*$("#sliderInner").css("margin-top", -windowHeight);
	$("#sliderInner").css("min-width", windowWidth);
	$("#top-image").css("height", windowHeight);
	$("#top-image").css("width", windowWidth);
	$("#sliderContent").css("margin-top", -(windowHeight+logoHeight)/2);
	$("#sliderContent").css("margin-left", (windowWidth-logoWidth)/2);*/

		//fixes navigation on resize
	if(windowWidth > 959){
		$("#mobileNavigation").hide();
		$("#openMobileNavigation").hide();
		$("#closeMobileNavigation").hide();
		
		$("#basket").hide();
		$("#openBasketNavigation").hide();
		$("#closeBasketNavigation").hide();
		
		$("#search").hide();
		$("#openSearchNavigation").hide();
		$("#closeSearchNavigation").hide();
	}else if (windowWidth < 958){
		//$("#mobileNavigation").css("display","block");
		$("#mobileNavigation").slideUp();
		$("#openMobileNavigation").hide();
		$("#closeMobileNavigation").hide();
		$("#openMobileNavigation").show();
		$("#openMobileNavigation").rotate({angle:0});
		
		$("#search").slideUp();
		$("#openSearchNavigation").hide();
		$("#closeSearchNavigation").hide();
		$("#openSearchNavigation").show();
		$("#openSearchNavigation").rotate({angle:0});
		
		$("#basket").slideUp();
		$("#openBasketNavigation").hide();
		$("#closeBasketNavigation").hide();
		$("#openBasketNavigation").show();
		$("#openBasketNavigation").rotate({angle:0});
}
	
	
	

	
$(window).on("orientationchange",function(){
	
  var windowHeight = $(window).height();
   var windowWidth = $(window).width();
   /* var logoHeight = $("#sliderContent").height();
   var logoWidth = $("#sliderContent").width();
	
	$("#sliderOuter").css("min-height", windowHeight);
	$("#sliderOuter").css("min-width", windowWidth);
	$("#sliderInner").css("min-height", windowHeight);
	$("#sliderInner").css("margin-top", -windowHeight);
	$("#sliderInner").css("min-width", windowWidth);
	$("#top-image").css("height", windowHeight);
	$("#top-image").css("width", windowWidth);

	$("#sliderContent").css("margin-top", -(windowHeight+logoHeight)/2);
	$("#sliderContent").css("margin-left", (windowWidth-logoWidth)/2);*/



		//fixes navigation on resize
	if(windowWidth > 959){
		$("#mobileNavigation").hide();
		$("#openMobileNavigation").hide();
		$("#closeMobileNavigation").hide();
		
		$("#basket").hide();
		$("#openBasketNavigation").hide();
		$("#closeBasketNavigation").hide();
		
		$("#search").hide();
		$("#openSearchNavigation").hide();
		$("#closeSearchNavigation").hide();
		
		
	}else if (windowWidth < 958){
		//$("#mobileNavigation").css("display","block");
		$("#mobileNavigation").slideUp();
		$("#openMobileNavigation").hide();
		$("#closeMobileNavigation").hide();
		$("#openMobileNavigation").show();
		$("#openMobileNavigation").rotate({angle:0});
		
		$("#search").slideUp();
		$("#openSearchNavigation").hide();
		$("#closeSearchNavigation").hide();
		$("#openSearchNavigation").show();
		$("#openSearchNavigation").rotate({angle:0});
		
		$("#basket").slideUp();
		$("#openBasketNavigation").hide();
		$("#closeBasketNavigation").hide();
		$("#openBasketNavigation").show();
		$("#openBasketNavigation").rotate({angle:0});
		
	}
	
});	
	
}
 

 
$(window).load(sizeContent);


$(document).ready(sizeContent);


//////Load the resize of window//////

//////Every resize of window//////
$(window).resize(sizeContent);
 
 
 

})(window, document, jQuery);/*(function(window, document, $, undefined) 	*/
});/*$(document).ready(function()*/



