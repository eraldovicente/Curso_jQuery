(function(w, d, j)
	{
		j(function() 
		{
			//j('.filha').parent().parent().parent()
			j('.site').find('.filha');
			j('.site').find('.topo').find('.filha');
			j('.conteudo').parent();
		});
	})(window, document, jQuery);