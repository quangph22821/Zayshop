import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate, useParams } from "react-router-dom"
import { updateCategorySchema } from '../../models';
import { updateCategoryForm } from "../../models";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCategory, fetchUpdateCate } from "../../redux/category.reducer";

const CategoryUpdate = () => {
  
  const {id} = useParams();
  const dispatch = useDispatch<AppDispatch>()
  const { category, isLoading } = useSelector((state: RootState) => state.category)

  const navigate = useNavigate();
  const { register, handleSubmit,reset, formState: { errors } } = useForm<updateCategoryForm>({
    resolver: yupResolver(updateCategorySchema),
    defaultValues: async () => {
      if (id) {
        return await fetProductById(id)
      }
    }
  })

  const onSubmit = async (data: updateCategoryForm) => {
    try {
        
        await dispatch(fetchUpdateCate({id,...data})).unwrap()
        navigate('/admin/category')
     
    }

    catch (error) {

    }
  }

  const fetProductById = async (id: string) => {
    const currentCategories = category?.find((item: any) => item._id == id)
    reset(currentCategories)
    
  }

  useEffect(() => {
    if (id) {
      fetProductById(id)
    }
  }, [])


  return (
    <>
      <div className="container">
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input
              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
              {...register("name")}
            

            />  
            <p className='text-red-600 text-[10px]'>
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label>Ảnh</label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("image")}
               
                type="text"
              />
              <p className='text-red-600 text-[10px]'>
                {errors.image && errors.image.message}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CategoryUpdate