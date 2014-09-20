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
	if ($(window).width() > 479) {
   

	

    ////////////////////////header section///////////////////////////////////
	
	//var imgHeight = $(".outerSlider").height()  ;
	//$("#innerSlider").css("margin-top", -imgHeight);
	//$("#innerSlider").css("height", imgHeight);
	
	////////////////making others sections larger than header////////////////
	//$("#innerOne").css("height", imgHeight*1.1);
	//$("#innerThree").css("height", imgHeight*1.1);

	
	//var centerTheHeaderContent = $("#innerSlider").height() ;
	//var widthOfHeader = $("#innerSlider").width();
	
	//////////////////////captions calculations/////////////////////////////
	
	//$("#caption img").css("height", centerTheHeaderContent/1.5);
	//$("#caption img").css("width", centerTheHeaderContent/1.5);
	
	//var captionCenter = $("#caption").height() ;
	
	//$("#caption").css("margin-top", (centerTheHeaderContent-captionCenter+158)/2);
	//$("#caption").css("margin-right", (widthOfHeader/12));
	
		
    ////////////////////////header section end///////////////////////////////

	
	////////////////////////contact sections////////////////////////////////
	
	/*var imgHeight2 = $(".outerTwo").height()  ;
	$("#innerTwo").css("margin-top", -imgHeight2);
	$("#innerTwo").css("height", imgHeight2);
	
	var midTheBox = $("#innerTwo").height() ;
	var boxSize = $("#list_of_contact").height() ;
	
	$("#plane").css("margin-top", (midTheBox-boxSize)/2);
	$("#get_in_touch").css("margin-top", (midTheBox-boxSize)/2);
	$("#list_of_contact").css("margin-top", (midTheBox-boxSize)/2);
	
	
	var textInBox = $("#get_in_touch").height() ;
	var boxSize2 = $("#get_in_touch p").height() ;
	
	$("#get_in_touch p").css("margin-top", (textInBox-boxSize2)/2);
	
	////////////////////////contact sections end ////////////////////////////////
	
 	////////////////////////////news sections ///////////////////////////////////
	
	var midTheBoxinfo = $("#innerThree").height() ;
	var newsBoxSize = $("#news").height() ;
	
	$("#news").css("margin-top", (midTheBoxinfo-newsBoxSize)/2);
	$("#people").css("margin-top", (midTheBoxinfo-newsBoxSize)/2);
	$("#events").css("margin-top", (midTheBoxinfo-newsBoxSize)/2);
	
	//////////////////////////news sections end /////////////////////////////////
	}
	else if($(window).width() < 479){
	
	////////////////////////header section///////////////////////////////////
	
	//var imgHeight = $(".outerSlider").height()  ;
	//$("#innerSlider").css("margin-top", '');
	//$("#innerSlider").css("height",'');
	
	////////////////making others sections larger than header////////////////
	//$("#innerOne").css("height", imgHeight*1.1);
	//$("#innerThree").css("height", imgHeight*1.1);

	
	//var centerTheHeaderContent = $("#innerSlider").height() ;
	//var widthOfHeader = $("#innerSlider").width();	
		
	//////////////////////captions calculations/////////////////////////////
	
	//$("#caption img").css("height", "");
	//$("#caption img").css("width", "");
	
	//var captionCenter = $("#caption").height() ;
	
	//$("#caption").css("margin-top", "");
	//$("#caption").css("margin-right", "");
	
		
    ////////////////////////header section end///////////////////////////////
		
		
	////////////////////////contact sections////////////////////////////////
	
	var imgHeight2 = $(".outerTwo").height()  ;
	$("#innerTwo").css("margin-top", 0);
	$("#innerTwo").css("height", "auto");
	
	var midTheBox = $("#innerTwo").height() ;
	var boxSize = $("#list_of_contact").height() ;
	
	$("#plane").css("margin-top", "");
	$("#get_in_touch").css("margin-top", "");
	$("#list_of_contact").css("margin-top", "");
	
	
	var textInBox = $("#get_in_touch").height() ;
	var boxSize2 = $("#get_in_touch p").height() ;
	
	$("#get_in_touch p").css("margin-top", "");
	
	////////////////////////contact sections end ////////////////////////////////	
		
	////////////////////////////news sections ///////////////////////////////////
	
	var midTheBoxinfo = $("#innerThree").height() ;
	var newsBoxSize = $("#news").height() ;
	
	$("#news").css("margin-top", "");
	$("#people").css("margin-top",  "");
	$("#events").css("margin-top",  "");*/
	
	//////////////////////////news sections end /////////////////////////////////
		
	}
	else{}
	
 }
 
$(window).load(sizeContent);


$(document).ready(sizeContent);


//////Load the resize of window//////

//////Every resize of window//////
$(window).resize(sizeContent);
 
 
 

})(window, document, jQuery);/*(function(window, document, $, undefined) 	*/
});/*$(document).ready(function()*/