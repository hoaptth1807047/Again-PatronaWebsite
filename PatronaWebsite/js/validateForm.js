$('#create-form').validate({
    rules: {
        firstName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        lastName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        'confirm-password': {
            equalTo: '[name="password"]'
        }
    },
    messages: {
        firstName: {
            required: 'Please enter your name.',
            minlength: 'The name is too short, please enter at least {2} characters',
            maxlength: 'The name is too long, please enter at most {15} characters',
        },
        lastName: {
            required: 'Please enter your last name.',
            minlength: 'They are too short, please enter at least {2} characters',
            maxlength: 'They are too long, please enter at most {15} characters',
        },
        email: {
            required: 'Please enter your email.',
            email: 'Please enter the correct email format.',
        },
        password: {
            required: 'Please enter your password.',
            minlength: 'The password is too short, please enter at least {2} characters.',
            maxlength: 'The password is too long, please enter at most {15} characters',
        },
        'confirm-password': {
            equalTo: 'The password and confirm are not the same.',
        }
    }
});


$('#login-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 15
        }
    },
    messages: {
        email: {
            required: 'Please enter your email.',
            email: 'Please enter the correct email format.',
        },
        password: {
            required: 'Please enter your password.',
            minlength: 'The password is too short, please enter at least {2} characters.',
            maxlength: 'The password is too long, please enter at most {15} characters.',
        }
    }
});