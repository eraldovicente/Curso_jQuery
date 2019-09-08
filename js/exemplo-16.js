(function(w, d, j)
	{
		j(function() 
		{
			j('#nome').attr('disabled', 'disabled');
			j('#nome').removeAttr('disabled');
			j('#salvo').attr('checked', 'checked');
		});
	}(window, document, jQuery));