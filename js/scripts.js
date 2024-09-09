
// function _loadMeta(){
// 	$(document).ready(function(){
// 		$("#header-placeholder").appendTo("meta.html");
// 	});
	
// }



function _open_menu() {
	$('.sidenavdiv, .sidenavdiv-in').animate({ 'margin-left': '0' }, 200);
	$('.live-chat-back-div').animate({ 'margin-left': '-100%' }, 400);
	$('.index-menu-back-div').animate({ 'margin-left': '0' }, 400);
}

function _open_live_chat() {
	$('.sidenavdiv, .sidenavdiv-in').animate({ 'margin-left': '0' }, 200);
	$('.index-menu-back-div').animate({ 'margin-left': '-100%' }, 400);
	$('.live-chat-back-div').animate({ 'margin-left': '0' }, 400);
}

function _close_side_nav() {
	$('.sidenavdiv, .sidenavdiv-in').animate({ 'margin-left': '-100%' }, 200);
	$('.index-menu-back-div,.live-chat-back-div').animate({ 'margin-left': '-100%' }, 400);
}


$(document).ready(function () {
	function trim(s) {
		return s.replace(/^\s*/, "").replace(/\s*$/, "");
	}
	$("#view_login").keydown(function (e) {
		if (e.keyCode == 13) {
			_logIn();
		}
	});

	$("#procced_reset_password_info").keydown(function (e) {
		if (e.keyCode == 13) {
			_proceedResetPassword();
		}
	});

	$("#complete_reset_password_info").keydown(function (e) {
		if (e.keyCode == 13) {
			_completeResetPassword();
		}
	});
});








function _onFocus(ids) {
	$('#' + ids).css("border-bottom", "rgba(0, 0, 0, .3) 1px solid");
}



// --------------- START CONSTANT FUNCTIONS --------------------------- //

function _placeHolder(search_txt, search_content) {
	superplaceholder({
		el: search_txt,
		sentences: search_content,
		options: {
			letterDelay: 80,
			loop: true,
			startOnFocus: false
		}
	});
}






function _isValidMobileNumber(number) {
	// Regular expression to match a typical mobile phone number format
	var regex = /^\d+$/;
	return regex.test(number);
}


function _togglePasswordVisibility(ids, toggle_pass) {
	const passwordInput = $('#' + ids);
	const togglePasswordIcon = $('#' + toggle_pass);

	if (passwordInput.attr('type') === 'password') {
		passwordInput.attr('type', 'text');
		togglePasswordIcon.html('<i class="bi-eye password-toggle"></i>');
	} else {
		passwordInput.attr('type', 'password');
		togglePasswordIcon.html('<i class="bi-eye-slash password-toggle"></i>');
	}
}


function _checkPasswordMatch(ids, toggle_pass) {
	var create_password = $("#create_reset_password").val();
	var confirmed_password = $("#confirmed_reset_password").val();
	if ((create_password != confirmed_password) && (confirmed_password != '')) {
		$('#message').show();
		$('#create-pass-focus,#confirmed-pass-focus').css('border-bottom', 'var(--active-color) 1px solid');
	} else {
		$('#message').hide();
		$('#create-pass-focus,#confirmed-pass-focus').css('border-bottom', 'rgba(0, 0, 0, .1) 1px solid');
	}
	_showPasswordVisibility(ids, toggle_pass);
}



function _showPasswordVisibility(ids, toggle_pass) {
	var password = $('#' + ids).val();
	if (password != '') {
		$('#' + toggle_pass).show();
	} else {
		$('#' + toggle_pass).hide();
	}
}


function _actionAlert(status, message1, message2) {
	if (status == true){
		$('#success-div').html('<div><i class="bi-check-all"></i></div> ' + message1 + '<br /><span>' + message2 + '</span>').fadeIn(500).delay(4000).fadeOut(100);
	}else{
		$('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' + message1 + '<br /><span>' + message2 + '</span>').fadeIn(500).delay(5000).fadeOut(100);
	}
}


function _warningAlert(alertId1, alertId2, alertMessage1, alertMessage2) {
	//$('#' + alertId).addClass('complain');
	$('#' + alertId1 + ',' + '#' + alertId2).css("border-bottom", "var(--active-color) 1px solid");
	$('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' + alertMessage1 + '<br /><span>' + alertMessage2 + '</span>').fadeIn(500).delay(5000).fadeOut(100);
}

function _sliptResponse(response, splitSign) {
	// Split the response at '!'
	var splitResponse = response.split(splitSign);
	// Trim the whitespace from the first part and append it with a newline character
	var firstPart = splitResponse[0].trim() + '\n';
	// Join the first part with the second part
	var formattedResponse = firstPart + splitResponse[1];
	return formattedResponse
}



function _capitalizeFirstLetterOfEachWord(inputText) {
	// Split the input text into an array of words
	var words = inputText.toLowerCase().split(' ');
	// Capitalize the first letter of each word
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	// Join the words back into a sentence
	var result = words.join(' ');
	return result;
}


function _obfuscateEmail(email, visibleChars) {
	// Split the email into username and domain
	const [username, domain] = email.split('@');
	// Calculate the number of asterisks to replace in the username
	const numAsterisks = Math.max(0, username.length - visibleChars);
	// Obfuscate the username by replacing characters with asterisks
	const obfuscatedUsername = username.substring(0, visibleChars) + '*'.repeat(numAsterisks);
	// Combine the obfuscated username and the domain to form the obfuscated email
	const obfuscatedEmail = `${obfuscatedUsername}@${domain}`;
	$('#useremail').html(obfuscatedEmail);
}




function _isNumberCheck(id, info) {
	$(document).on('keypress', '#' + id, function (event) {
		var key = event.keyCode || event.which;
		if (!((key >= 48 && key <= 57) || key === 43 || key === 45)) {
			event.preventDefault();
			$('#' + info).fadeIn(300);
			$(this).css('border-bottom', 'var(--active-color) 1px solid');
		} else {
			$('#' + info).fadeOut(300);
			$(this).css('border-bottom', 'rgba(0, 0, 0, .1) 1px solid');
		}
	});
}









function _nextPage(next_id, divid) {
	$('#login_div,#reset_password_info,#password_reset_successful').hide();
	$('#' + next_id).fadeIn(1000);
	$('#page-title').html($('#' + divid).html());
}



function _alertClose() {
	$('#get-more-div').fadeOut(300);
}

function _alertClose2(next_id, divid) {
	$('#get-more-div').fadeOut(300);
	_nextPage(next_id, divid);
}

function _alertClose3() {
	$('#get-more-div').fadeOut(300);
	$('#reset_password_btn').html('Proceed <i class="bi-arrow-right"></i>');
	document.getElementById('reset_password_btn').disabled = false;
}



function _getForm(page) {
	$('#get-more-div').html('<div class="ajax-loader"><img src="'+websiteUrl+'/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
	$.ajax({
		type: "POST",
		url: 'content/'+page,
		cache: false,
		success: function (html) {
			$('#get-more-div').html(html);
		}
	});
}



function _getPageWithId(page, verify_user_fullname, verify_user_email) {
	var action = 'get_page_with_id';
	var dataString = 'action=' + action + '&page=' + page;
	$.ajax({
		type: "POST",
		url: account_login_local_url,
		data: dataString,
		cache: false,
		success: function (html) {
			$('#get_page_id').html(html);
			$('#verify_user_fullname').html(verify_user_fullname);
			$('#verify_user_email').html(verify_user_email);
		}
	});
}







// --------------- END CONSTANT FUNCTIONS --------------------------- //




function _logIn() {
	var email = $('#email').val();
	var password = $('#password').val();
	
	$('#email,#passwords').removeClass('complain');

	if ((email != '') && (password != '')) {
		if (email.indexOf("@") <= 0) {
			_actionAlert(false, 'INVALID EMAIL ADDRESS', 'Kindly, check your email and try again');
		} else {
			_actionAlert(true, 'LOGIN SUCCESSFUL!', 'Redirecting to portal...');
			// _getUserLoginData(email, password);
			//window.parent(location = admin_portal_url);
		}
	} else {
		$('#email,#password').addClass('complain');
		_actionAlert(false, 'ERROR!', 'Fill all fields to continue');

	}
};























