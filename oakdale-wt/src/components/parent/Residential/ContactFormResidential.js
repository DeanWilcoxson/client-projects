import React from 'react'


function ContactFormResidential() {
    const initial = {
        firstName: "",
        lastName: "",
        phone: "",
        date: new Date(),
        message: ""
    }
    const [inputs, setInputs] = React.useState(initial)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit() {

    }


    return (
        <div>
            <h1>Contact us Today!</h1>

            <h3>You can either contact us via phone, email or stop on by!</h3>

            <h5>By phone: 209-390-3578</h5>

            <h5>Or by email, fill out this form with a short message regarding the service you would like performed.</h5>

            <form method='post'>

                <label>
                    First Name:
                    <input
                        type='text'
                        name='firstName'
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        type='text'
                        name='lastName'
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Phone Number:
                    <input
                        type='text'
                        name='phone'
                        onChange={handleChange}
                    />
                </label>

                <label>
                    How can we help?
                    <textarea style={{ width: '300px', height: '150px' }}
                        type='text'
                        name='message'
                        onChange={handleChange}
                    />
                </label>

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default ContactFormResidential;