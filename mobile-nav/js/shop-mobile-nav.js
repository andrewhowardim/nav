// JavaScript Document

$("#openBasketNavigation").click(function () {
$("#openBasketNavigation").hide();
$("#closeBasketNavigation").show();

var rotation = function (){
   $("#closeBasketNavigation").rotate({
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
   $("#openBasketNavigation").rotate({
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

$("#basket").slideDown(1000);
});


$("#closeBasketNavigation").click(function () {
$("#closeBasketNavigation").hide();
$("#openBasketNavigation").show();

 

var rotation = function (){
   $("#openBasketNavigation").rotate({
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
   $("#closeBasketNavigation").rotate({
      angle:45, 
      animateTo:0, 
	  duration:200,
      //callback: rotation,
     easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
	    
   });


}


$("#basket").slideUp(1000);
});


//fixes problem with to openBasketNavigation buttons appearing
$(window).on("orientationchange",function(){
	$("#openBasketNavigation").hide() 
$("#closeBasketNavigation").hide();
$("#basket").slideUp();
$("#openBasketNavigation").show();
$("#openBasketNavigation").rotate({angle:90});
	
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
