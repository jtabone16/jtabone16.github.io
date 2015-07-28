
$(document).ready(function () {
	
	
	// control menu with left/right arrow keys 		
	$(document).keydown(function(e) {
		var activeButton = $('#menu').find('.col-xs-2.menu-item.active');
		var activeSection = $('#info').find('.row.info-section.active');
	    switch(e.which) {
	        case 37: // left
	        	if(activeButton.length) { 
            		$(activeButton).attr('class', 'col-xs-2 menu-item');
					$(activeButton).prev().attr('class', 'col-xs-2 menu-item active');	
					
					$(activeSection).attr('class', 'row info-section inactive');
					$(activeSection).prev().attr('class', 'row info-section active');				

				} else {
            		$('#menu div:last-child').attr('class', 'col-xs-2 menu-item active');
            		$('#info div.row:last-child').attr('class', 'row info-section active');

				} 
				
				
				break;

	
	        case 39: // right
	            if(activeButton.length) {
            		$(activeButton).attr('class', 'col-xs-2 menu-item');
					$(activeButton).next().attr('class', 'col-xs-2 menu-item active');
					$(activeSection).attr('class', 'row info-section inactive');
					$(activeSection).next().attr('class', 'row info-section active');					
				} else {
            		$('#menu div:first-child').attr('class', 'col-xs-2 menu-item active');   
            		$('#info div.row:first-child').attr('class', 'row info-section active');         		
				}  
						
				break;
	
	        default: 
	        	return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
	
	
	// 	control menu item with click
	$(".menu-item").click(function(){
		var activeButton = $('#menu').find('.col-xs-2.menu-item.active');
		var activeSection = $('#info').find('.row.info-section.active');
		
		$(activeButton).attr('class', 'col-xs-2 menu-item');
		$(this).attr('class', 'col-xs-2 menu-item active');	
		
		$(activeSection).attr('class', 'row info-section inactive');
		var sectionID = '#' + this.id + '-section';
		$(sectionID).attr('class', 'row info-section active');
	
	});
	
});
