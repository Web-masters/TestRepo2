
$(document).ready(function() {

    $("#submit").click(function validateLogic() {

        //adding varables and deleting white spaces

        var name = $.trim($('input[name=name]').val());
        var email = $.trim($('input[name=email]').val());
        var password = $('input[name=password]').val();
        var repeat = $('input[name=repeat]').val();
        var myRadio = $('input[name=radios]');
        var checkedValue = myRadio.filter(':checked').val();
        var nameError = false;
        var emailError = false;
        var passwordError = false;


        //Inputs validation

        var numberOfErrors = 0;

        $('#nameError').addClass('hide');
        $('#emailError').addClass('hide');
        $('#passwordError').addClass('hide');
        $('#repeatError').addClass('hide');

        String.prototype.isEmpty = function() {
            return (this.length === 0 || !this.trim());
        };

        if (name.isEmpty()) {
            $('#nameError').removeClass('hide');
            $('#nameLenghtError').addClass('hide');
            nameError = true;
            numberOfErrors++;
        }
        if (email.isEmpty()) {
            $('#emailError').removeClass('hide');
            $('#emailValidError').addClass('hide');
            emailError = true;
            numberOfErrors++;
        }
        if (password.isEmpty()) {
            $('#passwordError').removeClass('hide');
            $('#passwordContentError').addClass('hide');
            $('#passwordLenghtError').addClass('hide');
            passwordError = true;
            numberOfErrors++;
        }
        if (repeat.isEmpty()) {
            $('#repeatError').removeClass('hide');
            numberOfErrors++;
        }

        //Name validation

        if (nameError == false) {
            if (name.length < 4) {
                $('#nameLenghtError').removeClass('hide');
                numberOfErrors++;
            } else {
                $('#nameLenghtError').addClass('hide');
            }
        }

        //Email address validation

        if (emailError == false) {
            if (!(email.match(/^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i))) {
                $('#emailValidError').removeClass('hide');
                numberOfErrors++;
            } else {
                $('#emailValidError').addClass('hide');
            }
        }

        //Password validation

        if (passwordError == false) {
            if (!(password == repeat)) {
                $('#passwordContentError').removeClass('hide');
                $('#passwordLenghtError').addClass('hide');
                numberOfErrors++;
            } else {
                if (password.length < 5) {
                    $('#passwordLenghtError').removeClass('hide');
                    $('#passwordContentError').addClass('hide');
                    numberOfErrors++;
                } else {
                    $('#passwordLenghtError').addClass('hide');
                }
            }
        }

        //Checking number of errors or showing informations

        if (numberOfErrors != 0) {
            $('#displayError').html('Ilość błędów w formularzu: <strong>' + numberOfErrors + ' - Popraw je!</strong>');
            $('#displayError').removeClass('hide');
        } else {
            $('#displayError').addClass('hide');
            var content = '<div id="dialog-message" class="jumbotron">' +
                    '<p>Hi ' + name + '</p>' +
                    '<p>your password is ' + password + ',</p>' +
                    '<p>your email is ' + email + '</p>' +
                    '<p>you are ' + checkedValue + '</p>' +
                    '<p>Thanks</p>' +
                    '</div>';
            $("#popup").html(content);

            $("#popup").dialog({modal: true, autoOpen: true});
        }
        event.preventDefault();
    });
});
