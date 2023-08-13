import { Link, Outlet } from "react-router-dom"
import Footer from "../footer"
import { useLocalStorage } from "../../hook"
import logout from "../../pages/logout"
import Header from "../header"


const UserLayout = () => {
    // const [user, setUser] = useLocalStorage('user', null)
    // if (user) {
    //     return <>
    //         <header className="bg-red-500 flex">
    //             <div className="  flex items-center gap-4 py-2">
    //                 <img className="w-[50px] ml-60" src="/logo.png" alt="" />
    //                 <input className="w-[600px] h-[30px] rounded-lg " type="text" placeholder="search" />
    //                 <p className="text-white">Xin chào: {user && user.lastName}</p>
    //             </div>
    //             <div className="flex items-center pl-[100px]">
    //                 <button type="submit" onClick={logout}>Logout</button>
    //             </div>
    //         </header>

    //         {/* Content */}
    //         < Outlet />
    //         <footer>
    //             <Footer />
    //         </footer>
    //     </>
    // } else {
       
    // }
    return <>
    <Header/>
      < Outlet />
      <Footer />
  </>
}

export default UserLayout