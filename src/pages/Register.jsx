import React from 'react'
import { RegisterSchema } from '../Validations/UserValidation.js';

function Register() {
    const RegisterUser = async (event) => {
        event.preventDefault()
        let formData = {
            name: event.target[0].value,
            username: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            confirmpassword: event.target[4].value,
        };

        RegisterSchema.validate(formData)
        .then(validatedData => {
            const { username } = validatedData;
            window.alert(`User "${username}" Registered Succesfully`);
            console.log(formData)
        })
        .catch(validationError => {
            window.alert(validationError.message);
        });
    };

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={RegisterUser}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" placeholder='Name'/>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" placeholder='Username'/>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" placeholder='email@email.com'/>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" placeholder='Password'/>
        <label htmlFor="confirmpassword">Confirm Password: </label>
        <input type="text" id="confirmpassword" placeholder='Confirm Password'/>
        <input className='button' type="submit" value="Register"></input>
      </form>
    </div>
  )
}

export default Register
