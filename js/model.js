//clears text input fields when it is focused on to allow for user entry
$(":text").focus(function(){
	$(this).val("");
});

//password validation function. credit to http://mlitzinger.com/blog/password-validator-js/
(function(){
	var password=document.querySelector('.password');

	var passwordConditions={
		charLength: document.querySelector('.pwdConditions .length'),
		lowercase: document.querySelector('.pwdConditions .lowercase'),
		uppercase: document.querySelector('.pwdConditions .uppercase'),
		special: document.querySelector('.pwdConditions .special')
	};

	var pattern={
		charLength: function(){
			if(password.value.length>=8) {
					return true;
			}
		},

		lowercase: function(){
			var regex = /^(?=.*[a-z]).+$/;

			if (regex.test(password.value)) {
				return true;
			}
		},

		uppercase: function(){
			var regex = /^(?=.*[A-Z]).+$/;

			if (regex.test(password.value)) {
				return true;
			}
		},

		special: function(){
			var regex = /^(?=.*[0-9]).+$/;

			if (regex.test(password.value)) {
				return true;
			}
		}
	}

	password.addEventListener('keyup', function (){
		patternTest( pattern.charLength(), passwordConditions.charLength );
		patternTest( pattern.lowercase(), passwordConditions.lowercase );
		patternTest( pattern.uppercase(), passwordConditions.uppercase );
		patternTest( pattern.special(), passwordConditions.special );

		if( hasClass(helperText.charLength, 'valid') && 
        	hasClass(helperText.lowercase, 'valid') && 
        	hasClass(helperText.uppercase, 'valid') && 
        	hasClass(helperText.special, 'valid')
    	) {
        	addClass(password.parentElement, 'valid');
		}

		else {
  			removeClass(password.parentElement, 'valid');
		}


	});



	function patternTest(pattern, response) {
    	if(pattern) {
        	addClass(response, 'valid');
    	} else {
        	removeClass(response, 'valid');
    	}
	}

	function addClass(el, className) {
    	if (el.classList) {
        	el.classList.add(className);
    	} else {
        	el.className += ' ' + className;
    	}
	}

	function removeClass(el, className) {
    	if (el.classList) {
        	el.classList.remove(className);
    	} else {
        	el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    	}
	}

	function hasClass(el, className) {
    	if (el.classList) {
        	console.log(el.classList);
        	return el.classList.contains(className);    
    	} else {
        	new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); 
    		}
	}	


})();

//reset modal after it is closed. credit to https://groups.google.com/forum/#!topic/twitter-bootstrap-stackoverflow/rnq8cSxy6E4
$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});
