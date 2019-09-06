// $ and $()

// Uma ação do próprio jQuery. Um método da própria biblioteca.
// $.ação

// Executa uma ação que pode ser do jQuery ou não, e essa ação é executada sobre o elemento.
// $(elemento).ação

(function (w, d, $) 
	{
			$(d).ready(function()
			{
				alert("Hello, world!");	
			});

	})(window, document, jQuery);

