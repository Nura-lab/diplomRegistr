import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  users: JSON.parse(localStorage.getItem('users')) || [],
  error: {},
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hanldeChange (state, action) {
      state[action.payload.name] = action.payload.value
    },
    registerUser (state, action) {
      const checkExist = state.users.find(
        user => user.email === action.payload.email
      )
      if (checkExist) {
        state.error['email'] = 'Email is already exist'
      } else {
        state.users.push(action.payload)
        state.currentUser = { ...action.payload }
        state.error = {}
        localStorage.setItem('users', JSON.stringify(state.users))
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
        window.location.href = '/'
      }
    },

    login (state, action) {
      const checkExist = state.users.find(
        user => user.email === action.payload.email
      )

      const isPasswordCorrect = state.users.find(
        user => user.password === action.payload.password
      )

      if (checkExist && isPasswordCorrect) {
        window.location.href = '/'
        localStorage.setItem('currentUser', JSON.stringify(checkExist))
      } else {
        state.error['loginError'] = 'Password or email is not correct'
      }
    },
    logout (state) {
      state.currentUser = {}
      localStorage.removeItem('currentUser')
    }
  }
})

export const { hanldeChange, registerUser, login, logout } = authSlice.actions

export default authSlice.reducer
