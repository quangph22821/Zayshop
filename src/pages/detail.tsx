import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { IProduct } from "../models"
import { getById } from "../api/product"


const DetailPage = (props: any) => {
  // assertion
  const [product, setProduct] = useState<IProduct>({} as IProduct)
  const { id } = useParams()

  const fetchProductById = async (id: string) => {
    try {
      const { data } = await getById(id)
      setProduct(data.data)
    } catch (error) {

    }
  }
  const detail = { ...product }
  // const Brand = { ...product.category_Id }
  const colorList = detail.color
  const sizeList = detail.size


  useEffect(() => {
    if (id) {
      fetchProductById(id)
    }
  }, [])

  return <>
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                className="card-img img-fluid"
                src={product.image}
                alt="Card image cap"
                id="product-detail"
              />
            </div>
          </div>
          {/* col end */}
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">{product.name}</h1>
                <p className="h3 py-2">{product.price}</p>
                <p className="py-2">
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-star text-secondary" />
                  <span className="list-inline-item text-dark">
                    Rating 4.8 | 36 Comments
                  </span>
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Brand:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>
                        {/* {Brand.name} */}
                      </strong>
                    </p>
                  </li>
                </ul>
                <h6>Description:</h6>
                <p>
                  {product.description}
                </p>
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    Avaliable Color :
                    <select
                      id="HeadlineAct"
                      className="border mx-3"
                    >
                      {colorList && colorList?.map((item: any) => {
                        return (
                          <option value={item._id}>{item.name}</option>
                        )
                      })}
                    </select>
                  </li>
                </ul>
                <form action="" method="GET">
                  <input
                    type="hidden"
                    name="product-title"
                    defaultValue="Activewear"
                  />
                  <div className="row">
                    <div className="col-auto">
                      <ul className="list-inline pb-3">
                        <li className="list-inline-item">
                          Size :
                          <select
                            id="HeadlineAct"
                            className="border mx-3"
                          >
                            {sizeList && sizeList?.map((item: any) => {
                              return (
                                <option value={item._id}>{item.name}</option>
                              )
                            })}
                          </select>
                        </li>
                        {/* {sizeList && sizeList?.map((item: any) => {
                          return <li className="list-inline-item"><span id={item.name}>
                            {item.name}
                          </span>
                          </li>
                        })} */}
                      </ul>
                    </div>
                    <div className="col-auto">
                      <ul className="list-inline pb-3">
                        <li className="list-inline-item text-right">
                          Quantity
                          <input
                            type="hidden"
                            name="product-quanity"
                            id="product-quanity"
                            defaultValue={1}
                          />
                        </li>
                        <li className="list-inline-item">
                          <span className="btn btn-success" id="btn-minus">
                            -
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge bg-secondary" id="var-value">
                            1
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="btn btn-success" id="btn-plus">
                            +
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row pb-3">
                    <div className="col d-grid">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        name="submit"
                        value="buy"
                      >
                        Buy
                      </button>
                    </div>
                    <div className="col d-grid">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        name="submit"
                        value="addtocard"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >

  </>
}

export default DetailPage