import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

const decodeToken = (token)=>{
    if (!token) {
        return null
    }
    return jwtDecode(token)
}

const initialState = {
  isLogged: localStorage.getItem('token') ? true : false,
  user: decodeToken(localStorage.getItem('token'))
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.isLogged = true
        state.user = decodeToken(action.payload) 


    },
    logout: (state) => {
      state.isLogged = false
      state.user = null
    },
  },
})


// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer