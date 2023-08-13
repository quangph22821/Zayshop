import { Link } from "react-router-dom"
import { ICategory } from "../models"
type Props = {
    data: ICategory,
    children?: React.ReactNode
}

export const ListCategory = ({ data }: Props) => {
    return <li className="pb-3">
        <Link
            className="collapsed d-flex justify-content-between h3 text-decoration-none"
            to={`/shoes?category_Id=${data._id}`}
        >
            {data.name}
        </Link>
    </li>

}