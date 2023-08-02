import { useState } from "react"
import { BsSearch } from "react-icons/bs"
const Searchbar = ({setUsername}) => {

    const [input,setInput] = useState('')   

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(input);
        setInput("");
    }

  return (
    <form className=" bg-[#1F2A48] rounded-lg px-4 py-3 flex justify-between items-center mb-5" onSubmit={handleSubmit}>
      <div className="flex items-center gap-3 ">
        <BsSearch className="text-xl text-blue-500 "/>
        <input type="text" placeholder="Search GitHub username..." className=" placeholder:text-white tracking-wider bg-transparent outline-none lg:w-[500px] placeholder:text-sm" value={input} onChange={e=>setInput(e.target.value)} required />
      </div>
      <button className="px-3 py-2 bg-blue-500 rounded-lg ">Search</button>
    </form>
  )
}

export default Searchbar
