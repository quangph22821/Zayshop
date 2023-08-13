import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../models'
// import { IFilm } from '../model'


export const todoAPI = createApi({
  reducerPath: "/shoes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8088",
    headers: {
      Authentication: "Bearer "
    }
  }),
  endpoints: builder => ({
    getAll: builder.query<IProduct[], string>({
      query: () => "/shoes"
    })
  })
})

export const { useGetAllQuery } = todoAPI