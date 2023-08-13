import { configureStore } from '@reduxjs/toolkit'
// import { todoAPI } from './service/home.service'

import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { shoesReducer } from './redux/shoes.reducer'
import { categoryReducer } from './redux/category.reducer'

export const store = configureStore({
    reducer: {
        shoes:shoesReducer,
        category:categoryReducer
    //     [todoAPI.reducerPath] : todoAPI.reducer
    // },
    // middleware:(getDefaultMiddleware) =>{
    //     return getDefaultMiddleware().concat(todoAPI.middleware)
    }
})
setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch