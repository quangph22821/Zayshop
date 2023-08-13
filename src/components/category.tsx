import React from 'react'
import { Link } from 'react-router-dom'
import { ICategory, IProduct } from '../models'
type Props = {
    data: ICategory,
    children?: React.ReactNode
}


const Category = ({data}: Props) => {
    return <div className="col-12 col-md-4 p-5 mt-3">
        <Link to="#">
            <img
                src={data.image}
                className="rounded-circle img-fluid border "
            />
        </Link>
        <h5 className="text-center mt-3 mb-3">{data.name}</h5>
        <p className="text-center">
            <Link to="shop" className="btn btn-success">Go Shop</Link>
        </p>
    </div>
}

export default Category