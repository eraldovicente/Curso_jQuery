(function(w, d, j)
	{
		j(function() 
		{
			//j('.filha').parent().parent().parent()
			//j('.site').find('.filha');
			//j('.site').find('.topo').find('.filha');
			//j('.conteudo').parent();
			//j('.irmao').closest('.topo');
		var elem = j('.irmao').closest('.site').find('.conteudo');
		console.log(elem);
		});
	}(window, document, jQuery));