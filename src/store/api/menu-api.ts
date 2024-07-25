import { apiSlice } from '../slice/api-slice'

const menuApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMenu: build.query<IMenuResponse, void>({
      query: () => ({
        url: 'api/menu',
        method: 'POST',
        body: {
          show_all: 1,
        },
      }),
      providesTags: ['menu'],
    }),
  }),
})

export const { useGetMenuQuery, useLazyGetMenuQuery } = menuApi

interface IMenuResponse {
  status: string
  result: Result
}

interface Result {
  categories: ICategpry[]
}

export interface ICategpry {
  category_name: string
  menu: Menu[]
}

interface Menu {
  name: string
  description: string
  photo: string
  price: number
}
