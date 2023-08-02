import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import UserCard from "./components/UserCard"
import {LiaSpinnerSolid} from "react-icons/lia"
const App = () => {
  const [user,setUser] = useState({});
  const [username,setUsername] = useState("swamhtetaung8");
  const [loading,setLoading] = useState(false);

  const getUserInfo = async(username) => {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {Authorization: 'Bearer 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'}
    });
    const data = res.json();
    return data
  }

  useEffect(()=>{
    setLoading(true)
    getUserInfo(username).then(user => {
      setUser(user)
      setLoading(false)
    });
  },[username])
  console.log(user)
  return (
    <main className=" lg:px-[350px] md:py-[50px] md:px-[80px] px-5 py-10 bg-[#141C30] max-w-full min-h-screen text-white">
      <Navbar/>
      <Searchbar setUsername={setUsername}/>
      {loading?(<LiaSpinnerSolid className="text-5xl text-center block mx-auto animate-spin mt-[200px]"/>):(<UserCard user={user}/>)}
    </main>
  )
}

export default App
