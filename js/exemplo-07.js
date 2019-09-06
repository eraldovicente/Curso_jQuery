(function(w, d, j)
	{
		j(function() 
		{
			j('#teste').attr('id', 'novoid');
			j('#novoid').find('button').addClass('estilo');
		});
	})(window, document, jQuery);