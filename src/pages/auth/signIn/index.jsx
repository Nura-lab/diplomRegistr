import React, { useState } from 'react'
import css from './index.css'
import lo from '../../../components/img/lo.png'
import ForgotPassword from '../Forgot'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { hanldeChange, login } from '../../../store/reducers/auth'

const SignIn = () => {
  const dispatch = useDispatch()
  const { password, email, error } = useSelector(state => state.auth)

  const handleChangeInput = e => {
    dispatch(hanldeChange({ name: e.target.name, value: e.target.value }))
  }

  const formHandler = e => {
    e.preventDefault()
    const dataToSend = {
      email,
      password
    }
    dispatch(login(dataToSend))
  }

  return (
    <div className='login'>
      <div className='logo-holder'>
        <form onSubmit={formHandler}>
          {error.loginError && (
            <div className='error_alert'>{error.loginError}</div>
          )}
          <h1 className='title'>Кируу</h1>
          <label className='input_label'>Эл.почта</label>
          <input
            type='email'
            required
            className='input'
            placeholder='Эл.почта'
            value={email}
            name='email'
            onChange={handleChangeInput}
          />
          <label className='input_label'>Пароль</label>
          <input
            type='text'
            className='input'
            placeholder='Пароль'
            value={password}
            name='password'
            onChange={handleChangeInput}
          />
          <div className='forgot_password'>
            <div className='checbox'>
              <input type='checkbox' name='check' id='' />
              <p>Remember for 30 days </p>
            </div>
            <div>
              <a className='href' href='.\components\ForgotPassword'>
                Forgot password:
              </a>
            </div>
          </div>
          <button type='submit' className='button_signin'>
            Sign i_signin
          </button>
          <button type='submit' className='button_signin'>
            Sign in with Google
          </button>
          <div className='signup_free'>
            <p>Don’t have on account?</p>
            <button className='sign_free_button' href=''>
              Sign up for free
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
// return(
//     <div className='main'>
//         <div className='signIn'>
//             <form onSubmit={formHandler}>
//                 <div className='forgot_password' >
//                     <h1 className="title" >Кируу</h1>
//                     <div className="input_label">Эл.почта</div>
//                     <input
//                         type="text"
//                         className="input"
//                         placeholder="keep your email address"
//                         value={email}
//                         onChange={handleChangeEmail}
//                         />
//                     <div className="input_label">Пароль</div>
//                     <input
//                         type="text"
//                         className="input"
//                         placeholder="keep your email address"
//                         value={password}
//                         onChange={handleChangePassword}
//                     />

//                     <div className="recomendation">
//                        <p className="plz"><input type="checkbox" className='checkbox'/>Remember for 30 days</p>
//                         <p className="plz"> Forgot password</p>
//                     </div>
//                     <input
//                         type="text"
//                         className="input"
//                         placeholder="Sign In"

//                     />

//                 </div>
//             </form>
//         </div>
//     </div>
// )
// }
export default SignIn
