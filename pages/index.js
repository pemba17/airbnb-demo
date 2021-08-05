import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({exploreData,cardData}) {
  return (
    <div className="">
      <Head>
        <title>Air Bnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
     <Banner/>
     <main className="max-w-7xl mx-auto px-8 sm:px-16">
       <section className="pt-5">
         <h1 className="text-4xl font-semibold">Explore Nearby</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item)=>(
            <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
          ))}
         </div>
       </section>

       <section>
         <h2 className="text-4xl py-8 font-semibold">Live Anywhere</h2>
         <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-3">
            {cardData?.map(({img,title})=>(
              <MediumCard key={img} img={img} title={title}/>
            ))}
          </div>
       </section>

       <section>
              <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlishts By Airbnb" buttonText="Get Inspired"/>
       </section>
     </main>

     <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData=await fetch('https://links.papareact.com/pyp').then(
    (res)=>res.json()
  );

  const cardData=await fetch('https://links.papareact.com/zp1').then(
    (res)=>res.json()
  )

  return{
    props:{
      exploreData,
      cardData
    }
  }

}