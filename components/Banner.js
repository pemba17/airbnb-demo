import Image from 'next/image';
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px[ md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
           <Image src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560" layout="fill" objectFit="cover"/>
           <div className="absolute top-1/4 w-1/2 lg:w-1/4 left-6 lg:left-28">
               <p className="text-2xl lg:text-6xl text-extrabold text-white">Olympian & Paralympian Online Experiences</p>
               <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-8 hover:shadow-xl active:scale-90 transition duration-150 font-bold ">Explore More</button>
           </div>
        </div>
    )
}

export default Banner
