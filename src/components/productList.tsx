import { IProduct } from "../models"
import { Link } from "react-router-dom"

type Props = {
  data: IProduct
}

const ProductList = ({ data }: Props) => {

  return <div className="col-md-4">
    <div className="card mb-4 product-wap rounded-0">
      <div className="card rounded-0">
        <div className="h-[200px]">

        <img className="card-img rounded-0 img-fluid h-[200px]" src={data.image} />
        </div>
        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
          <ul className="list-unstyled">
            <li><Link className="btn btn-success text-white" to={`/shoes/${data._id}`}><i className="far fa-heart"></i></Link></li>
            <li><Link className="btn btn-success text-white mt-2" to={`/shoes/${data._id}`}><i className="far fa-eye"></i></Link></li>
            <li><Link className="btn btn-success text-white mt-2" to={`/shoes/${data._id}`}><i className="fas fa-cart-plus"></i></Link></li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <Link to={`/shoes/${data._id}`} className="h3 text-decoration-none">{data.name}</Link>
        <ul className="list-unstyled d-flex justify-content-center mb-1">
          <li>
            <i className="text-warning fa fa-star"></i>
            <i className="text-warning fa fa-star"></i>
            <i className="text-warning fa fa-star"></i>
            <i className="text-muted fa fa-star"></i>
            <i className="text-muted fa fa-star"></i>
          </li>
        </ul>
        <p className="text-center mb-0">{data.price}.000 VND</p>
      </div>
    </div>
  </div>
}
export default ProductList