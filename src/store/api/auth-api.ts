import { IToken } from '../../utils/local-storage'
import { apiSlice } from '../slice/api-slice'

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IToken, FormData>({
      query: (body) => ({
        url: '/oauth/token',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
