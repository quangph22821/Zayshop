import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import UserLayout from "./components/layout/user"
import HomePage from "./pages/home"
import DetailPage from "./pages/detail"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import AdminLayout from "./components/layout/admin"
import AdminHome from "./pages/admin/home"
import ProductUpdate from "./pages/admin/product-update"
import ProductAdd from "./pages/admin/products-add"
import Shop from "./pages/shop"
import About from "./pages/about"
import Contact from "./pages/contact"
import Admincategory from "./pages/admin/ctegoryadmin"
import AddCategoryy from "./pages/admin/addcatogery"
// import CategoryUpdate from "./pages/admin/updatecategory"
import { createContext, useState } from "react"
import Message from "./components/message"
import CategoryUpdate from "./pages/admin/updatecategory"
import CartPage from "./pages/cart"




export const MessageContext = createContext({} as any)
function App() {
  const [message, setMessage] = useState(null)
  return <MessageContext.Provider value={{ message, setMessage }}>
    {message && <Message content={message} />}
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shoes/:id" element={<DetailPage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Signin />} />
          <Route path="home" element={<AdminHome />} />
          <Route path="product/:id" element={<ProductUpdate />} />
          <Route path="product" element={<ProductAdd />} />
          <Route path="category" element={<Admincategory />} />
          <Route path="addcategory" element={<AddCategoryy />} />
          <Route path="update/:id" element={<CategoryUpdate/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </MessageContext.Provider>

}

export default App
