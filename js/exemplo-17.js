(function(w, d, j)
	{
		j(function() 
		{
			j('#idade').find('option').eq(1).attr('selected', 'selected');  
			j('#idade').val();
		});
	}(window, document, jQuery));