import React, { useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../scss/components/Forgot.scss'


const Forgot = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle successful login, e.g., redirect the user or store authentication token in the state
        try {
          const response = await axios.post('http://localhost:5000/forgot', {
            email: email
          });
          console.log('Sending successful!', response.data);
          alert('Sending successful!')
          navigate('/login')
        } catch (error) {
          console.error('This email is not exist!', error);
          alert('This email is not exist!')
          // Handle login error, e.g., display an error message to the user
        }
      };

    return (
        <div className='Forgot'>
            <div className='Form-container'>
                <div>
                    <h1>Forgot password</h1>
                </div>
                <form className='Form' onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input placeholder='Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button className='button-forgot'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Forgot;