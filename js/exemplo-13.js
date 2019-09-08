(function(w, d, j)
	{
		j(function() 
		{
			//var valor = $.trim(j('#algo').html());
			j('li').each(function() {
				alert(j(this).html());
			});
			var idade = 29;

			if (j.isNumeric(idade))
			{
				alert('Sim, é numerico');
			}
		});
	}(window, document, jQuery));