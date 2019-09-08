(function(w, d, j)
	{
		j(function() 
		{
			if ( $('input').hasClass('inputtext'))
			{
				alert('Tem a classe');
			} else {
				alert('Não tem a classe');
			}
		});
	}(window, document, jQuery));