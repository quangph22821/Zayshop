import { useLocalStorage } from "../hook"


const logout = () => {
    const [user,setUser] = useLocalStorage("user",null)
    console.log(user);
    if(user){
        setUser.removeItem("accessToken")
    }
}

export default logout