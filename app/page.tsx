
import getBillboard from "./action/getBillboard"
import AllProducts from "./components/AllProducts"
import BilboardSec from "./components/Bilboard"
import CartSlider from "./components/CartSlider"
import Categories from "./components/Categories"
import Foter from "./components/Foter"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Services from "./components/Services"

export default async function Home() {

  const billboardImage = await getBillboard()

  return (
    <>
      <Navbar />

      <main className='' >

        <BilboardSec data={billboardImage} />
        <br />
        <Services />
        <br />
        <br />
        <hr className='w-[58%] mx-auto border-yellow-600/60' />
        <br />
        <br />

        <br />
        <br />
        <h1 className="text-center tracking-wider text-2xl">CATEGORIES</h1>
        <hr className="w-20 mx-auto border-b border-yellow-600/60 " />
        <br />
        <Categories />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center tracking-wider  text-2xl">TRENDING</h1>
        <hr className="w-20 mx-auto border-b border-yellow-600/60 " />
        <br />
        <AllProducts />
        <br />
        <Foter />
      </main>
    </>
  )
}
