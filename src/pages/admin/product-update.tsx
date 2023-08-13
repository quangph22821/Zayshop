import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { updateForm, updateSchema } from '../../models';
import { getById, update } from '../../api/product';
import { getAllCate } from '../../api/category';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchCategory } from '../../redux/category.reducer';
import { fetchOneShoes, fetchUpdateShoes } from '../../redux/shoes.reducer';



const ProductUpdate = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { category, isLoading } = useSelector((state: RootState) => state.category)
  const { shoes } = useSelector((state: RootState) => state.shoes)
  const { id } = useParams()
  console.log(id);
  
  const [dataUpdate, setDataupdate] = useState([]);
  // const [category, setcategory] = useState([]);
  const navigate = useNavigate()
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProductById(id)
      }
    }
  })

  useEffect(() => {
    const getCate = async () => {
      try {
        await dispatch(fetchCategory()).unwrap()
        
      } catch (error) {
        
      }
    }


    getCate()
  }, [])

  
  const onSubmit = async (data: updateForm) => {
    try {
        await dispatch(fetchUpdateShoes(data)).unwrap()
        navigate('/admin/home')
      
    } catch (err) {
      console.log(err);

    }

  }

  const fetchProductById = async (id: string) => {
    const data  = await dispatch (fetchOneShoes(id)).unwrap()
    return data.products

  }
  useEffect(() => {
    if (id) {
      fetchProductById(id)
    }
  }, [])

  return <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
        <div className="lg border:col-span-2 lg border:py-12">

        </div>

        <div className="rounded-lg border bg-white p-8 shadow-lg border lg border:col-span-3 lg border:p-12">
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


              <div>
                <p>Loại</p>
                <select {...register('category_Id')}>
                  {category?.map((item: any) => {

                    return (
                      <option value={item._id}>{item?.name}</option>
                    )

                  })}

                </select>
              </div>

              <div>
                <label>Ảnh</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("image")}
                />
                <p className='text-red-600 text-[10px]'>
                  {errors.image && errors.image.message}
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

export default ProductUpdate