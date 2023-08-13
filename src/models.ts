import * as Yup from "yup"

export interface IProduct {
    _id: string
    name: string,
    price: number,
    description: string,
    image: string,
    quantity: number,
    size: { id: string, name: string },
    color: { id: string, name: string },
    category_Id:ICategory
}

export interface SearchName {
    name: string,
}
export interface ISpecification {
    name: string,
    attributes: { code: string, name: string, value: string }[]
}

export interface ICategory {
    _id: string,
    name: string,
    image: string

}
export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    image: Yup.string().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiểu 10 ký tự").required("Trường dữ liệu bắt buộc"),
    // color: Yup.array().required()
})

export type updateForm = Yup.InferType<typeof updateSchema>

// Signnup
export const signupSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    // lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
})

export type signupForm = Yup.InferType<typeof signupSchema>

//signin
export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})
export type signinForm = Yup.InferType<typeof signinSchema>

//add
export const addSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    image: Yup.string().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiểu 10 ký tự").required("Trường dữ liệu bắt buộc"),
    // color: Yup.
    // category_Id: Yup.object().required("thiếu trường dữ liệu")
})
export type addForm = Yup.InferType<typeof addSchema>

//signup

//category
export const categorySchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    image: Yup.string().required("Trường dữ liệu bắt buộc"),
})

export type categoryForm = Yup.InferType<typeof categorySchema>

//addcatogery
export const addCatogerySchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    image: Yup.string().required("Trường dữ liệu bắt buộc"),
    // color: Yup.
    // category_Id: Yup.string()
})
export type addCategoryForm = Yup.InferType<typeof addCatogerySchema>

//updatecategory

export const updateCategorySchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    image: Yup.string().required("Trường dữ liệu bắt buộc"),
    // color: Yup.array().required()
})

export type updateCategoryForm = Yup.InferType<typeof updateCategorySchema>
