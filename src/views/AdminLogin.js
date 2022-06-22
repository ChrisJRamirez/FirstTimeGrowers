import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialFormValues = {
  username: '',
  password: '',
};

export default function AdminLogin() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const loggedInUserInfo = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/api/auth/login`,
        formValues
      );
      const { token } = loggedInUserInfo.data;
      localStorage.setItem('token', token);
      navigate('/admin', { replace: true });
    } catch {
      alert('incorrect username or password');
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center min-h-screen'>
        <form onSubmit={onSubmit}>
          <div className='m-6'>
            <label
              htmlFor='username'
              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none'
            >
              Username
            </label>
            <input
              id='username'
              name='username'
              onChange={onChange}
              type='username'
              autoComplete='username'
              required
            />
          </div>

          <div className='m-6'>
            <label
              htmlFor='password'
              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none'
            >
              Password
            </label>
            <input
              id='password'
              name='password'
              onChange={onChange}
              type='password'
              autoComplete='current-password'
              required
            />
          </div>

          <div className='m-6'>
            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
