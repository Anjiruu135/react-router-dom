import React from 'react'
import { LoginSchema } from '../Validations/UserValidation.js';
import getData from '../modules/getData.js';

function Login() {
  const LoginUser = async (event) => {
    event.preventDefault();
    let formData = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    try {
      await LoginSchema.validate(formData);

      // Assuming your JSON file with user data is named 'users.json'
      const usersData = await getData();
      const user = usersData;

      const foundUser = user.find(users => users.username === formData.username && users.password === formData.password);

      if (foundUser) {
        window.alert(`Login Successful`);
        console.log(formData);
      } else {
        window.alert(`Invalid username or password`);
      }
    } catch (validationError) {
      window.alert(validationError.message);
    }
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={LoginUser}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" placeholder='Username'/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" placeholder='Password'/>
        <input className='button' type="submit" value="Login"></input>
      </form> 
    </div>
  );
}

export default Login
