import {MdLocationPin,MdHomeWork} from "react-icons/md"
import {BsTwitter} from "react-icons/bs"
import {BiLink} from "react-icons/bi"
const UserCard = ({user}) => {
  return (
    <div className="bg-[#1F2A48] rounded-lg px-8 py-6">
      {user.message == "Not Found" ? (<p>No User Found</p>):(<div className="flex items-start gap-10 ">
        <img src={user.avatar_url} width={150} height={150} className="hidden object-cover rounded-full lg:block" alt="" />
        <div className="w-full ">
            <div className="flex justify-between w-full">
                <div className="flex gap-5">
                <img src={user.avatar_url} className="object-cover rounded-full lg:hidden md:w-[100px] md:h-[100px] w-[80px] h-[80px]" alt="" />
                <div className="flex flex-col">
                <h3 className="text-lg font-semibold tracking-wide md:text-2xl ">{user.name}</h3>
                <p className="my-2 text-blue-500 lg:hidden ">@{user.login}</p>
                </div>

                </div>
                <span className="hidden font-semibold tracking-wide md:block ">Joined {new Date(user.created_at).toDateString()}</span>
            </div>
            <span className="block mt-4 font-semibold tracking-wide md:hidden">Joined {new Date(user.created_at).toDateString()}</span>
            <p className="hidden my-2 text-blue-500 lg:block ">@{user.login}</p>
            <p className="my-3 text-gray-300 md:my-5 ">{user.bio ?? 'This user has no bio.'}</p>
            <div className=" my-10 bg-[#141C30] md:px-8 px-5 py-3 rounded-xl flex justify-between items-center font-semibold">
                <div>
                    <p className="text-sm text-gray-300 md:text-base ">Repos</p>
                    <p className="text-lg md:text-2xl">{user.public_repos}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-300 md:text-base ">Followers</p>
                    <p className="text-lg md:text-2xl">{user.followers}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-300 md:text-base ">Followings</p>
                    <p className="text-lg md:text-2xl">{user.following}</p>
                </div>
            </div>

            <div className="grid justify-between grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                <div className={`flex gap-3 ${!user.location && 'text-gray-400'}`}>
                    <MdLocationPin className="text-2xl "/>
                    <p>{user.location ?? "Not available"}</p>
                </div>
                <div className={`flex gap-3 ${!user.twitter_username && 'text-gray-400'}`}>
                    <BsTwitter className="text-2xl "/>
                    <p>{user.twitter_username ?? "Not available"}</p>
                </div>
                <div className={`flex gap-3 ${!user.blog && 'text-gray-400'}`}>
                    <BiLink className="text-2xl "/>
                    <a href={user.blog && user.blog} target="_blank">{user.blog ? "Link to personal website" : "Not available"}</a>
                </div>
                <div className={`flex gap-3 ${!user.company && 'text-gray-400'}`}>
                    <MdHomeWork className="text-2xl "/>
                    <p>{user.company ?? "Not available"}</p>
                </div>
            </div>
        </div>
      </div>)}
    </div>
  )
}

export default UserCard
