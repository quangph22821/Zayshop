import { useEffect, useState } from "react"
import { ICategory, IProduct } from "../models"
import { getAllCate } from "../api/category"
import { ListCategory } from "../components/categoryList"
import ProductList from "../components/productList"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { fetchProAllCate, fetchShoes } from "../redux/shoes.reducer"
import { fetchCategory } from "../redux/category.reducer"


const Shop = () => {
    // const [products, setProducts] = useState<IProduct[]>([])
    const [selectCate, setSlectCate] = useState(null)//Lọc 
    const dispatch = useDispatch<AppDispatch>()
    const { category } = useSelector((state: RootState) => state.category)
    const { shoes, isLoading } = useSelector((state: RootState) => state.shoes)

    //Lọc

    const handleChange = (event: any) => {
        setSlectCate(event.target.value)
    }
    useEffect(() => {
        const getCate = async () => {
            try {
                await dispatch(fetchCategory())

            } catch (error) {

            }
        } 
        if (selectCate) {
            dispatch(fetchProAllCate(selectCate));
        } else {
            dispatch(fetchShoes())
        }
        getCate()
        console.log("cate", category);
    }, [])

    useEffect(() => {
        const getShoes = async () => {
            try {
                await dispatch(fetchShoes()).unwrap()
            } catch (error) {


            }
        }
        getShoes()
    }, [])
    return <>
        {/* Start Content */}
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <select
                        className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                        value={setSlectCate}
                        onChange={handleChange}
                    >
                        <option value=''>All Categories</option>
                        {category?.map((category: any) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        {shoes.map((item: IProduct) => <ProductList data={item} key={item._id} />)}
                    </div>
                </div>
            </div>
        </div>
        {/* End Content */}
        {/* Start Brands */}
        <section className="bg-light py-5">
            <div className="container my-4">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Our Brands</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="col-lg-9 m-auto tempaltemo-carousel">
                        <div className="row d-flex flex-row">
                            {/*Controls*/}
                            <div className="col-1 align-self-center">
                                <a
                                    className="h1"
                                    href="#multi-item-example"
                                    role="button"
                                    data-bs-slide="prev"
                                >
                                    <i className="text-light fas fa-chevron-left" />
                                </a>
                            </div>
                            {/*End Controls*/}
                            {/*Carousel Wrapper*/}
                            <div className="col">
                                <div
                                    className="carousel slide carousel-multi-item pt-2 pt-md-0"
                                    id="multi-item-example"
                                    data-bs-ride="carousel"
                                >
                                    {/*Slides*/}
                                    <div
                                        className="carousel-inner product-links-wap"
                                        role="listbox"
                                    >
                                        {/*First slide*/}
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_01.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_02.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_03.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_04.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End First slide*/}
                                        {/*Second slide*/}
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_01.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_02.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_03.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_04.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Second slide*/}
                                        {/*Third slide*/}
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_01.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_02.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_03.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="../src/assets/img/brand_04.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Third slide*/}
                                    </div>
                                    {/*End Slides*/}
                                </div>
                            </div>
                            {/*End Carousel Wrapper*/}
                            {/*Controls*/}
                            <div className="col-1 align-self-center">
                                <a
                                    className="h1"
                                    href="#multi-item-example"
                                    role="button"
                                    data-bs-slide="next"
                                >
                                    <i className="text-light fas fa-chevron-right" />
                                </a>
                            </div>
                            {/*End Controls*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Brands*/}

    </>
}

export default Shop