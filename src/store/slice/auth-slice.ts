import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFromLocalStorage, IToken, removeFromLocalStorage, saveToLocalStorage } from '../../utils/local-storage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

const token = getFromLocalStorage('token')

const initialState = {
  token,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, action: PayloadAction<IToken>) => {
      state.token = action.payload

      saveToLocalStorage('token', action.payload)

      const expireTime = Date.now() + action.payload.expires_in
      saveToLocalStorage('expireTime', expireTime)
    },

    removeCredential: (state) => {
      state.token = null

      removeFromLocalStorage('expireTime')
      removeFromLocalStorage('token')
    },
  },
})

// Action Hook
const useAuthAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(authSlice.actions, dispatch)
}

// Selector Hook
const useAuthSelector = () => useSelector((state: RootState) => state.auth)

export { authSlice, useAuthAction, useAuthSelector }
