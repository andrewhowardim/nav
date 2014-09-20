// JavaScript Document

$("#openMobileNavigation").click(function () {
$("#openMobileNavigation").hide();
$("#closeMobileNavigation").show();

var rotation = function (){
   $("#closeMobileNavigation").rotate({
      angle:0, 
      animateTo:45, 
	  duration:200,
      //callback: rotation,
     easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();

var rotation2 = function (){
   $("#openMobileNavigation").rotate({
      angle:0, 
      animateTo:45, 
	  duration:200,
      //callback: rotation,
     easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation2();

$("#mobileNavigation").slideDown();
});


$("#closeMobileNavigation").click(function () {
$("#closeMobileNavigation").hide();
$("#openMobileNavigation").show();

 

var rotation = function (){
   $("#openMobileNavigation").rotate({
      angle:45, 
      animateTo:0, 
	  duration:200,
      //callback: rotation,
     easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
 
  
   
}
rotation();

var rotation2 = function (){
   $("#closeMobileNavigation").rotate({
      angle:45, 
      animateTo:0, 
	  duration:200,
      //callback: rotation,
     easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
	    
   });


}


$("#mobileNavigation").slideUp();
});


//fixes problem with to openMobileNavigation buttons appearing
$(window).on("orientationchange",function(){
	$("#openMobileNavigation").hide() 
$("#closeMobileNavigation").hide();
$("#mobileNavigation").slideUp();
$("#openMobileNavigation").show();
$("#openMobileNavigation").rotate({angle:90});
	
}); 

//on mobile swipe
$("#sliderOuter").on("swipe",function(){
//  $(this).hide();
});
//on mobile scroll
$("#sliderOuter").on("scrollstart",function(){
 // alert("Started scrolling!");
});
//hides jquery mobile loader for now!!!
