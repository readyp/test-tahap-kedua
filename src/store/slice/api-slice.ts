import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { delayFn } from '../../utils/delay-fn'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set('Authorization', `${token.token_type} ${token.access_token}`)
    }

    return headers
  },
  fetchFn: async (...args) => {
    import.meta.env.DEV && await delayFn(5000)
    return fetch(...args)
  },
})

const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['user', 'menu'],
})

export { apiSlice }
