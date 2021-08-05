import Image from 'next/image';
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px[ md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
           <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover"/>
           <div className="absolute top-1/2 w-full text-center">
               <p className="text-sm sm:text-lg">Not Sure Where You Want To Go? Perfect223</p>
               <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-4 hover:shadow-xl active:scale-90 transition duration-150 font-bold ">Im Flexible</button>
           </div>
        </div>
    )
}

export default Banner
