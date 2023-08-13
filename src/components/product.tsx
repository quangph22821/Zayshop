import { Link } from "react-router-dom"
import { IProduct } from "../models"

type Props = {
    data: IProduct
}

const Product = ({ data }: Props) => {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <Link to={`/shoes/${data._id}`}>
                    <img src={data.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                        <li className="text-muted text-right">{data.price}</li>
                    </ul>
                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">{data.name}</a>
                    <p className="card-text">
                        {data.description}
                    </p>
                    <p className="text-muted">Reviews (24)</p>
                </div>
            </div>
        </div>
    )
}

export default Product