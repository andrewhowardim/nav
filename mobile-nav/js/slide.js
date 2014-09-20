// JavaScript Document
    $(document).ready(function(){  
//Sliding Right 
        $('.boxgrid.slideright').hover(function(){  
            $(".cover", this).stop().animate({left:'50%'},{queue:false,duration:300});  
        }, function() {  
            $(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});  
        });  
		
		//Sliding Left 
        $('.boxgrid.slideleft').hover(function(){  
            $(".cover", this).stop().animate({left:'-50%'},{queue:false,duration:300});  
        }, function() {  
            $(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});  
        });  
       
        //Sliding Down  
        $('.boxgrid.slidedown').hover(function(){  
            $(".cover", this).stop().animate({top:'50%'},{queue:false,duration:300});  
        }, function() {  
            $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});  
        });  
		
		//Sliding Up  
        $('.boxgrid.slideup').hover(function(){  
            $(".cover", this).stop().animate({top:'-50%'},{queue:false,duration:300});  
        }, function() {  
            $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});  
        });  
		
		
//Sliding Left 
        
		
		$('#mails').hover(function(){  
            $(".cc", this).stop().animate({left:'-130px'},{queue:false,duration:500});  
        }, function() {  
            $(".cc", this).stop().animate({left:'0px'},{queue:false,duration:500});  
        });  
		
		$('#tickets').hover(function(){  
            $(".cc", this).stop().animate({left:'130px'},{queue:false,duration:500});  
        }, function() {  
            $(".cc", this).stop().animate({left:'0px'},{queue:false,duration:500});  
        }); 
		
		$('#telephone').hover(function(){  
            $(".cc", this).stop().animate({left:'-130px'},{queue:false,duration:500});  
        }, function() {  
            $(".cc", this).stop().animate({left:'0px'},{queue:false,duration:500});  
        });  
       
	   
	   
}); 