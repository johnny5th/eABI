(function( $ ){

	$.fn.eABI = function(options) {  
	
		var settings = $.extend({
			'data' : '',
			condition : function(){},
			callback : function(){}
		}, options);
		
		return this.each(function() {
			
			var $this = $(this);
			
			
			// Check condition on load
			if(settings.condition() == true){
				
				$this.append(data);
				
				$this.addClass('activecontent');
				
				settings.callback();
				
			}else{
			
				// Check for the condition on page resize
				$(window).resize(function() {
					if(!$this.hasClass('activecontent') && settings.condition()){
						$this.append(data);
						
						$this.addClass('activecontent');
						
						settings.callback();
					}
				});
				
			}
			
		});
	
	};
})( jQuery );