import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { signinForm, signupForm } from "../models"
import { signin, signup } from "../api/auth"

const intialState = {
    auth: [],
    isLoading: false
} as { auth:[], isLoading: boolean }


export const fetchSignup = createAsyncThunk("auth/fetchSignup",async(body:signupForm)=>{
    try {
        const data = await signup(body)
        return data
    } catch (error) {
        
    }
})

export const fetchSignin = createAsyncThunk("auth/fetchSignin",async(body:signinForm)=>{
    try {
        const data = await signin(body)
        return data
    } catch (error) {
        
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState:intialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSignup.fulfilled,(state,action)=>{
            state.isLoading=false
        })

        builder.addCase(fetchSignin.fulfilled,(state,action)=>{
            state.isLoading=false
        })
    }
})