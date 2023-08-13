import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { categoryForm, categorySchema } from "../../models";
import { addCategory } from "../../api/category";

const AddCategoryy = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<categoryForm>({
        resolver: yupResolver(categorySchema)
    });
    const onSubmit = async (data: categoryForm) => {
        try {
            const response = await addCategory(data)
            navigate("/admin/category")

        } catch (error) {

        }
    }

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
      </div>
    </div>
  </section>
}

export default AddCategoryy