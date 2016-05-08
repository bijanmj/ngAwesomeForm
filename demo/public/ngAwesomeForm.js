var app = angular.module('myApp', []);



app.directive('ngAwesomeForm', function($http){
	return {
		restrict: 'A',
		priority: -1,
		scope: true,
		link: function(scope, element, attributes){

			element.bind('click', function(e){ // destroy error message on form click

	           var errorMessageElement = document.getElementsByClassName('awesome-form-errorMessage');

	           if (errorMessageElement.length){
				    errorMessageElement[0].parentNode.removeChild(errorMessageElement[0]);
			   }
			});


			element.bind('submit', function(e){

	           var confirmation = attributes.confirmMessage;
	           if(confirmation && !confirm(confirmation)){ // check confirmation
	           		e.stopImmediatePropagation();
	            	e.preventDefault();
	            }
	            else{ // confirmed!

					// if no local success message is defined, show the one returned from server
					var successMessage = attributes.successMessage || serverSuccessMessage; 

					var errorMessageOpacity = attributes.errorMessageOpacity || 0.7;

					console.log(errorMessageOpacity);

	            	// set for position to relative
	            	element.css('position', 'relative');

	            	// keep the height and width of the form
					var successBox = document.createElement('div');
					successBox.style.height = element[0].offsetHeight + 'px';
					successBox.style.width = element[0].offsetWidth + 'px';
					successBox.classList.add('awesome-form'); 
					element[0].parentNode.appendChild(successBox);


					// create the loading icon
					var loadingElement = document.createElement('img');
					loadingElement.setAttribute('src', attributes.loadingIcon);
					loadingElement.classList.add('awesome-form-loading');
					element[0].parentNode.appendChild(loadingElement);


					// hide the entire form
					element[0].style.display='none';

					// send http request to service
					$http.post(attributes.ngAwesomeForm, scope[attributes.modelName])
					.success(function(serverSuccessMessage){ 
						
						loadingElement.style.display = 'none'; // hide loading icon

						// create successful submit message
						var successMessageElement = document.createElement('div');
						successMessageElement.classList.add('awesome-form-successMessage');
						successMessageElement.appendChild(document.createTextNode(successMessage)); 
						successBox.appendChild(successMessageElement);
					})
					.error(function(serverErrorMessage){
						
						element[0].style.display='block'; // show the form again
						loadingElement.style.display = 'none'; // hide loading icon
						successBox.style.display = 'none'; // hide success box

						// create error message 
						var errorMessageElement = document.createElement('div');
						errorMessageElement.appendChild(document.createTextNode(serverErrorMessage));
						errorMessageElement.classList.add('awesome-form-errorMessage');
						element[0].parentNode.appendChild(errorMessageElement);
						window.setTimeout(function(){ // delay animation
							errorMessageElement.style.opacity = errorMessageOpacity;
						}, 100);

					});

	            }

			});
		}
	};
});

