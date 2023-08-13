import instance from "."
import { ICategory, categoryForm, updateCategoryForm } from "../models"

export const getAllCate = () => {
    const uri = "/category"
    return instance.get(uri)
}

export const getLimitCate = () => {
    const uri = "/category/limit"
    return instance.get(uri)
}

export const categoryGetById = (_id:string)=>{
    const uri = "/category/" + _id
    return instance.get(uri)
}

export const deleteCategory = (_id : string) =>{
    const uri = "/category/" + _id
    return instance.delete(uri)
}

export const updateCategory = ( body:ICategory) =>{
    
    return instance.put(`/category/${body._id}`,body)
}

export const addCategory = (data:categoryForm) =>{
    const uri = "/category/" 
    return instance.post(uri, data)
}
