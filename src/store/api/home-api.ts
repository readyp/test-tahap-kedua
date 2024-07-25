import { apiSlice } from '../slice/api-slice'

const homeApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<IHomeResponse, void>({
      query: () => ({
        url: '/api/home',
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
})

export const { useGetUserQuery } = homeApi

interface IHomeResponse {
  status: string
  result: IUser
}

export interface IUser {
  greeting: string
  name: string
  saldo: number
  point: number
  qrcode: string
  banner: string[]
}
