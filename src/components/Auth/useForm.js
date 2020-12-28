import {useState, useEffect} from 'react';
// create a custom hooks for form 
const useForm = (submit, validate) => {
    const [values, setValue] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setValue((prevData) => {
            return{
                ...prevData,
                [name]: value
            }
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            submit();
        }
    }, [errors, isSubmitting, submit]);

    return {
        values,
        errors,
        inputHandler,
        submitHandler
    }
}

export default useForm;