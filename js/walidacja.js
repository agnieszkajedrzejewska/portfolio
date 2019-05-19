//WALIDACJA FORMULARZA
(function(){
	var form = document.querySelector("#myForm"), 
		fields = form.querySelectorAll("[data-error]");

	form.addEvenListener('submit', function(e){
		e.preventDefault(); //zapobiegamy domyślnej akcji przeglądarki

		/*var errors =[];
		for(var=i; i < fields.length; i++){
			var field = fields[i]
		console.log(field);
		}*/

	}, false);

})();