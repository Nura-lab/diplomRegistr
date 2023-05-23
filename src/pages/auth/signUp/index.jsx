import React, { useState } from 'react'
import css from './index.css'
import sign from './../../../components/img/signUp.png'
import logof from './../../../components/img/logo1.png'
// import { Button } from '@mui/material'
// import { Input } from '@mui/material';
import Forgot from '../Forgot'
import { useDispatch, useSelector } from 'react-redux'
import { hanldeChange, registerUser } from '../../../store/reducers/auth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// регистрация
const SignUp = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { name, lastName, password, email, users, error } = useSelector(
    state => state.auth
  )

  const handleSubmit = e => {
    e.preventDefault()
    const dataToSend = {
      name,
      email,
      password,
      lastName
    }
    dispatch(registerUser(dataToSend))
  }

  const handleChange = e => {
    dispatch(hanldeChange({ name: e.target.name, value: e.target.value }))
  }

  return (
    <div className='main'>
      <div className='signUp'>
        <form onSubmit={handleSubmit}>
          {error.email && (
            <div className='error_alert'>Account is already registered</div>
          )}

          <h1 className='sign_up_title'>катталуу</h1>
          <div className='label_input'>
            <label className='signup_label'>Аты</label>
            <input
              type='text'
              className='signup_input'
              placeholder='aты'
              value={name}
              name='name'
              onChange={handleChange}
            />
            <label className='signup_label'>Фамилясы</label>
            <input
              type='text'
              className='signup_input'
              placeholder='фамилясы'
              value={lastName}
              name='lastName'
              onChange={handleChange}
            />
            <label className='signup_label'>Эл.почта</label>
            <input
              type='email'
              className='signup_input'
              placeholder='Эл.почта'
              value={email}
              name='email'
              required
              onChange={handleChange}
            />
            <label className='signup_label'>Пароль</label>
            <input
              type='text'
              className='signup_input'
              placeholder='Пароль'
              value={password}
              name='password'
              onChange={handleChange}
            />
          </div>
          <div className='forgot_password'>
            <div className='checbox'>
              <input className='box' type='checkbox' name='check' id='' />
              <p>Remember for 30 days </p>
            </div>
            <div>
              <a className='href' href='../Forgot'>
                Forgot password:
              </a>
            </div>
          </div>
          <button type='submit' className='sign_up'>
            Sign up
          </button>
          <div className='signup_free'>
            <p>Don’t have on account?</p>
            <button className='sign_free_button'>Sign up for free</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
