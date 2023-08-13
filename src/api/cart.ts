import instance from "."

export const addToCard = (body:any)=>{
    return instance.post('/cart/',body)
}