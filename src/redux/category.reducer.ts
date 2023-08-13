import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICategory, updateCategoryForm } from "../models";
import { categoryGetById, deleteCategory, getAllCate, getLimitCate, updateCategory } from "../api/category";
import { fetchShoes } from "./shoes.reducer";

const intialState = {
    category: [],
    isLoading: false
} as { category:[], isLoading: boolean }

export const fetchCategory = createAsyncThunk("category/fetch",async(arg,thunkAPI)=>{
    try {
        const {data} = await getAllCate()
        return data.data
    } catch (error:any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const fetchCategoryLimit = createAsyncThunk("category/fetchLimit",async(arg,thunkAPI)=>{
    try {
        const {data} = await getLimitCate()
        return data.data
    } catch (error:any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const fetchOneCategory = createAsyncThunk(
    'category/OneCategory',
    async (_id: string) => {
        const response = await categoryGetById (_id);
        return response.data;
    }
)
//xóa
export const fetchDeleteCategory = createAsyncThunk("category/fetchDelete",async(id:any,thunkAPI)=>{
    try {
        const data = await deleteCategory(id)
        return data.data
    } catch (error:any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

//update
export const fetchUpdateCate = createAsyncThunk("category/fetchUpdate", async (body:any) => {
    try {
        const response = await updateCategory(body)
        return response.data
    } catch (error: any) {

    }
})

const categorySlice = createSlice({
    name:"category",
    initialState:intialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(fetchCategory.fulfilled,(sate,action)=>{
            sate.category = action.payload
            sate.isLoading=false
        })

        builder.addCase(fetchCategoryLimit.fulfilled,(sate,action)=>{
            sate.category = action.payload
            sate.isLoading=false
        })

        builder.addCase(fetchDeleteCategory.fulfilled,(state, action) => {
            state.isLoading=false
        })
        
    }
})

export const categoryReducer = categorySlice.reducer