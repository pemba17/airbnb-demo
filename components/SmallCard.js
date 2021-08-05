import Image from "next/image";
function SmallCard({img,location,distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-2 rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            {/* Left Img */}
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className="rounded-lg"/>
            </div>
            {/* Right Info */}
            <div>
                <p>{location}</p>
                <p className="text-gray-400">{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard;