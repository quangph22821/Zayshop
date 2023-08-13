import { createAsyncThunk } from "@reduxjs/toolkit"

const intialState = {
    cart: [],
    isLoading: false
} as { cart:[], isLoading: boolean }

export const addToCard = createAsyncThunk("cart/fetchAddToCard",async(body:any)=>{

})