import { useState } from 'react'

const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        // calling event.persist() allows references to the event to occur async
        event.persist();

        setValues(values => ({...values, [event.target.name]: event.target.value }));
        ;    
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }
    return {values, handleChange, handleSubmit}
}

export default useForm
