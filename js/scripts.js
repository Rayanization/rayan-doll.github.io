var s = skrollr.init();

$(function() {
    
        
	// Turn on parallax (this works with the data-stellar-ratio attribute on various elements in the HTML)
	$(window).stellar();
	  
    

});

       
    // ScrollMagic Effect


    $(document).ready(function(){

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    
    // pin the intro
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#pagetitle',
        triggerHook: 0,
        duration: '10%'
        
    })
    .setPin('#pagetitle', {pushFollowers: false})
    .addTo(controller);
    
    // loop through each .box element
    $('.box').each(function(){
        
        // build a scene 
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      duration: '80%',
      triggerHook: 0.2 
    })
    .setClassToggle( this, 'fade-in')
    .addTo(controller);
        
    }); 
        
        // loop through each .paragraph element
    $('.photo').each(function(){
        
        // build a scene 
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      duration: '80%',
      triggerHook: 0.8 
    })
    .setClassToggle( this, 'fly-in')
    .addTo(controller);
        
    }); 
        
            // loop through each .paragraph element
    $('.slogan1').each(function(){
        
        // build a scene 
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      duration: '80%',
      triggerHook: 0.8 
    })
    .setClassToggle( this, 'fly-in')
    .addTo(controller);
        
    }); 
        
          if ($("#quote").length) {
        var mySplitText = new SplitText("#quote", {type:"words,chars"});

        TweenLite.set("#quote", {perspective:500});

        TweenMax.staggerFrom(mySplitText.chars, 1, {opacity:0, scale:0.1, y:20, rotationY:30, transformOrigio:"30% 30% 20%", ease:Back.easeOut}, 0.09);        
    }
        

});
     


