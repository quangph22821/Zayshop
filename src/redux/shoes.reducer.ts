import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProducts, getAll, getById, getLimit, remove, update } from "../api/product";
import { IProduct, addForm, updateForm } from "../models";
import { categoryGetById } from "../api/category";

const intialState = {
    shoes: [],
    isLoading: false
} as { shoes:[], isLoading: boolean }

export const fetchShoes = createAsyncThunk("shoes/fetch", async (arg, thunkAPI) => {
    try {
        const { data } = await getAll()
        return data.products
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message)
    }

})

export const fetchShoesLimit = createAsyncThunk("shoes/fetchLimit", async (arg, thunkAPI) => {
    try {
        const { data } = await getLimit()
        return data.products
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message)
    }

})

export const createShoes = createAsyncThunk("shoes/create", async (body: addForm, thunkAPI) => {
    try {
        const data = await addProducts(body)
        return data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

// Lọc theo sản phẩm
export const fetchProAllCate = createAsyncThunk("shoes/fetchAllCate", async (id:any) => {
    try {
        const response = await categoryGetById(id)
        return response.data
    } catch (error: any) {

    }
})

// update
export const fetchUpdateShoes = createAsyncThunk("shoes/fetchUpdate", async (body:any) => {
    try {
        const response = await update(body)
        return response.data
    } catch (error: any) {

    }
})

//delete
export const fetchDeleteShoes = createAsyncThunk("shoes/fetchDelte", async (id:any) => {
    try {
        const response = await remove(id)
        return response.data
    } catch (error: any) {

    }
})

//getOne
export const fetchOneShoes = createAsyncThunk("shoes/fetchOne", async (id:any) => {
    try {
        const response = await getById(id)
        return response.data
    } catch (error: any) {

    }
})

const shoesSlice = createSlice({
    name: "shoes",
    initialState: intialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchShoes.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchShoes.fulfilled, (state, action) => {
            state.shoes = action.payload
            state.isLoading = false
        })

        //add

        builder.addCase(createShoes.fulfilled, (state, action) => {
            // state.shoes = action.payload
            state.isLoading = false
        })

        //Lọc
        builder.addCase(fetchProAllCate.fulfilled, (state, action) => {
            state.shoes= action.payload
        })

        //update
        builder.addCase(fetchUpdateShoes.fulfilled,(state, action) => {
            state.isLoading=false
        })

        //delete
        builder.addCase(fetchDeleteShoes.fulfilled,(state, action) => {
            state.isLoading=false
        })
        // limit
        builder.addCase(fetchShoesLimit.fulfilled,(state, action) => {
            state.shoes = action.payload
            state.isLoading=false
        })

    }
})
export const shoesReducer = shoesSlice.reducer