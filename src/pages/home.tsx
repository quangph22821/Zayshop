import { useEffect, useState } from "react"
import { ICategory, IProduct } from "../models"
import Category from "../components/category"
import Product from "../components/product"
import { getLimit } from "../api/product"
import { getLimitCate } from "../api/category"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { fetchShoes, fetchShoesLimit } from "../redux/shoes.reducer"
import { fetchCategory, fetchCategoryLimit } from "../redux/category.reducer"



const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { category } = useSelector((state: RootState) => state.category)
    const { shoes, isLoading } = useSelector((state: RootState) => state.shoes)
    
    const fetchProduct = async () => {
        try {
            await dispatch(fetchShoesLimit()).unwrap()
        } catch (error) {

        }
        //cate
        try {
            await dispatch(fetchCategoryLimit()).unwrap()
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <>
        {/* Start Categories of The Month */}
        <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Categories of The Month</h1>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="row">
                {category.map((item: ICategory) => <Category data={item} key={item._id} />)}
            </div>
        </section>
        {/* End Categories of The Month */}
        {/* Start Featured Product */}
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Featured Product</h1>
                        <p>
                            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {shoes.map((item: IProduct) => <Product data={item} key={item._id} />)}
                </div>
            </div>
        </section>
        {/* End Featured Product */}
    </>
}

export default HomePage