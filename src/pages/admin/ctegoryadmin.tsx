import { useContext, useEffect, useState } from "react"
import { ICategory } from "../../models"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteCategory, getAllCate } from "../../api/category"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { fetchCategory, fetchDeleteCategory } from "../../redux/category.reducer"
import { MessageContext } from "../../App"


const Admincategory = () => {
    // const [products, setProducts] = useState<ICategory[]>([])
    const dispatch = useDispatch<AppDispatch>()
    const { message, setMessage } = useContext(MessageContext)

    const { category, isLoading } = useSelector((state: RootState) => state.category)

    const fetchProduct = async () => {
        try {
            await dispatch(fetchCategory()).unwrap()
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    const checkDelete = async (id: string) => {
        const tb = window.confirm("Bạn có muốn xóa không!")
        if (tb) {
            await dispatch(fetchDeleteCategory(id)).unwrap()
            await dispatch(fetchCategory()).unwrap()
            setMessage({
                type: "success",
                message: "Xoa Thanh Cong !"
            })
        }
    }

return <><main className='flex'>
        <section className='flex-initial w-[300px] h-[1000px] mt-[50px]'>
            <Link to="/admin/home"><h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-house"></i>Giày thể thao</h2></Link>
            <Link to="/admin/category"><h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-bars"></i>Danh mục</h2></Link>
            <h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-tablet"></i>Người dùng</h2>
        </section>
        <section className='flex-initial w-full px-[10px] bg-slate-50  '>
            <h1 className='text-3xl mt-[10px] font-bold'>Category</h1>

            <Link to="/admin/addcategory">
                <button className="mt-[10px] border px-2 py-2 bg-blue-500 boder rounded-lg">Thêm sản phẩm</button>
            </Link>
            <div className='mt-[20px]'>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                        <thead>
                            <tr>
                                <th
                                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Tên sản phẩm
                                </th>
                                <th
                                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Hình ảnh
                                </th>
                                <th
                                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                >
                                    Thao tác
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {category.map((item) => (


                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {item.name}

                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <img src={item.image} alt="" width={100} />
                                    </td>
                                    <td className="text-center ">
                                        <button className="bg-sky-600 text-white rounded-md p-2 btn-remove" onClick={() => checkDelete(item._id)}><i className="fa-sharp fa-solid fa-trash"></i></button>

                                        <Link to={`/admin/update/${item._id}`}>
                                            <button className="bg-yellow-500 text-white rounded-md p-2 ml-[6px]"><i className="fa-solid fa-wrench"></i></button>
                                        </Link>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    </main>
</>
}

export default Admincategory