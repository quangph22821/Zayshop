
import { Outlet } from "react-router-dom"
import { useLocalStorage } from "../../hook"


const AdminLayout = () => {
   
    return <>
        {/* <header className="bg-sky-500 flex border rounded-lg">
            <div className="  flex items-center gap-4 py-2">
                <img className="w-[50px] ml-40" src="/logo.png" alt="" />
                <input className="w-[600px] h-[30px] rounded-lg " type="text" placeholder="search" />
            </div>
           
        </header> */}
        <Outlet/>
    </>
}

export default AdminLayout