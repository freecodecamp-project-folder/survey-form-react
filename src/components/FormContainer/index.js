import React, {useState} from 'react'

const FormContainer = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    })

    const {firstName, lastName, email, phoneNumber} = formData;

    const handleInputChange = event => {
        let value = event.target.value;
        const { name } = event.target;

        const newState = {
            ...formData,
            [name]: value
        };

        setFormData(newState);
    };

    const handleFormSubmit = event => {
        event.preventDefault();

        if (!firstName || !lastName) {
            alert('Please enter your name.');
        };

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        });
    };

    return (
        <div>
            <form>
                <ul>
                    <li>
                    <input 
                    value={firstName}
                    name='firstName'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='First Name'
                    />
                    </li>

                    <li>
                        <input 
                        value={lastName}
                        name='lastName'
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Last Name'
                        />
                    </li>

                    <li>
                        <input 
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Email'
                        />
                    </li>

                    <li>
                        <input 
                        value={phoneNumber}
                        name='phoneNumber'
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Phone Number'
                        maxLength = {10}
                    />
                    </li>
                </ul>
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default FormContainer;
