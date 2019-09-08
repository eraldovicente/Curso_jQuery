(function(w, d, j)
	{
		j(function() 
		{
			j('input').attr('data-idade', '90');
			j('input').data('idade', 90);
			j('input').data('idade');
			j('input').data('caracteres', j('input').val().length);
			j('input').data('caracteres');
		});
	}(window, document, jQuery));