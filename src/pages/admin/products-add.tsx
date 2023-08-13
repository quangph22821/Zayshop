import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useNavigate } from 'react-router-dom'
import { ICategory, addForm, addSchema, updateForm, updateSchema } from '../../models';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { createShoes } from '../../redux/shoes.reducer';
import { MessageContext } from '../../App';
import { fetchCategory } from '../../redux/category.reducer';



const ProductAdd = () => {
  const navigate = useNavigate()
  const { message, setMessage } = useContext(MessageContext)
  const dispatch = useDispatch<AppDispatch>()
  const { category, isLoading } = useSelector((state: RootState) => state.category)
  const { register, handleSubmit, formState: { errors } } = useForm<addForm>({
    resolver: yupResolver(addSchema),
  })


  const onSubmit = async (data: addForm) => {
    try {

      await dispatch(createShoes(data)).unwrap()
      console.log(data);
      
      setMessage({
        type: "success",
        message: "Thêm thành công"
      })
      navigate('/admin/home')

    } catch (err) {
      console.log(err);

    }

  }
  
  useEffect(() => {
    const getCate = async () => {
      try {
        await dispatch(fetchCategory()).unwrap()

      } catch (error) {
        
      }
    }
    // console.log(category);
    getCate()
  }, [])

  return <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
        <div className="lg border:col-span-2 lg border:py-12">

        </div>

        <div className="rounded-lg border bg-white p-8 shadow-lg border lg border:col-span-3 lg border:p-12">
          <h1 className='text-center text-2xl'>Thêm Sản Phẩm</h1>
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
              <div>
                <p className='text-red-600 text-[10px]'>
                </p>
                <div>
                  <label className="">
                    Category
                  </label>

                  <select
                    id="HeadlineAct"
                    {...register("category_Id")}
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm "
                  >
                    {category.map((item) => {
                      return (
                        <option value={item._id}>{item.name}</option>
                      )
                    })}

                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label>Giá</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("price")}
                  type="number"
                />
                <p className='text-red-600 text-[10px]'>
                  {errors.price && errors.price.message}
                </p>
              </div>
            </div>
            <div>
              <label>Mô tả</label>

              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("description")}
              ></textarea>
              <p className='text-red-600 text-[10px]'>
                {errors.description && errors.description.message}
              </p>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Cập nhật
              </button>
            </div>
            {/* {JSON.stringify(errors)} */}
          </form>
        </div>
      </div>
    </div>
  </section>

}

export default ProductAdd