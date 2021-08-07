import Image from 'next/image';
import {
    GlobeAltIcon,
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 gap-4">
            {/* Left Heading */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
            </div>

            {/* Middle Heading */}
            <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm px-4">
                <input type="text" placeholder="Search" className="bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 "/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 "/>
            </div>

            {/* Right Heading */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a Host</p>
                <GlobeAltIcon className="hidden md:inline h-4 cursor-pointer"/>  
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>  
            </div>   
        </header>
        
    )
}

export default Header
