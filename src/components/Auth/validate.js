const validate = (values) => { // get values object
    let errors = {};
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(!values.fullName){
        errors.fullName = "Name is required"
    }

    if (!values.email) {
        errors.email = "Email Address is required";
    } else if (!emailValidator.test(values.email)) {
        errors.email = "Not a valid Email Address";
    }

    if(!values.password) {
        errors.password = "Password is required";
    }else if (values.password.length < 6){
        errors.password = "Password must be at least 6 characters";
    }

    if(values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password don't match";
    }

    return errors;
}

export default validate;