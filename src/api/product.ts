import instance from ".";
import { IProduct, SearchName, addForm, updateForm } from "../models";

export const getAll = () => {
    const uri = "/shoes/shop"
    return instance.get(uri)
}

export const getLimit = () => {
    const uri = "/shoes"
    return instance.get(uri)
}

export const getAdidas = () => {
    const uri = "/shoes?category_Id=64b8123046a17bbda21dbbc3"
    return instance.get(uri)
}


export const getById = (_id:string)=>{
    const uri = "/shoes/" + _id
    return instance.get(uri)
}

export const update = (body: IProduct) => {
    return instance.put(`/shoes/${body._id}`,body)
}

export const remove = (id:string) =>{
    const uri = "/shoes/" + id
    return instance.delete(uri)
} 

export const addProducts = (data:addForm) =>{
    const uri = "/shoes/"
    return instance.post(uri,data)
}
