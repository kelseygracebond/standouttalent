	 /***********************************/
	/******** HTML Wireframe JS ********/
   /***********************************/


$(document).ready(function(){
  	// Takes the data attribute and turnes it into a hidden description overlay.
	$('[data-description]').each(function(){
		$(this).html(
			$(this).html() + '<div class="wf-description">' + $(this).data('description') + '</div>'
		);
		$(this).css('position', 'relative');
	});
	
	// Fades in the description on hover
	$('.wf-description').hover(
	  function () {
	    $(this).addClass('view-description');
	  },
	  function () {
	  	$(this).removeClass('view-description');
	  }
	);
})