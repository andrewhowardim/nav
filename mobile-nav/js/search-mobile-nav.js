// JavaScript Document

$("#openSearchNavigation").click(function () {
$("#openSearchNavigation").hide();
$("#closeSearchNavigation").show();

var rotation = function (){
   $("#closeSearchNavigation").rotate({
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
   $("#openSearchNavigation").rotate({
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

$("#search").slideDown(500);
});


$("#closeSearchNavigation").click(function () {
$("#closeSearchNavigation").hide();
$("#openSearchNavigation").show();

 

var rotation = function (){
   $("#openSearchNavigation").rotate({
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
   $("#closeSearchNavigation").rotate({
      angle:45, 
      animateTo:0, 
	  duration:200,
      //callback: rotation,
     easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
	    
   });


}


$("#search").slideUp(500);
});


//fixes problem with to openSearchNavigation buttons appearing
$(window).on("orientationchange",function(){
	$("#openSearchNavigation").hide() 
$("#closeSearchNavigation").hide();
$("#search").slideUp();
$("#openSearchNavigation").show();
$("#openSearchNavigation").rotate({angle:90});
	
}); 

//on mobile swipe
//$("#sliderOuter").on("swipe",function(){
//  $(this).hide();
//});
//on mobile scroll
//$("#sliderOuter").on("scrollstart",function(){
 // alert("Started scrolling!");
//});
//hides jquery mobile loader for now!!!
