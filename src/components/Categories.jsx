import tshirt from '../assets/bf251e577449a1f464e2f01185035685.jpeg'
import pants from '../assets/eb90e6c88dfd3fd0a94d5a02a3f6fc47.jpeg'
import jacket from '../assets/146353b8c9954b0f96daf01d85f55890.jpeg'
import oversized from '../assets/id-11134201-23030-rtgv8xxmr9nv9d.jpeg'
const categories = () => {
  return (
    <div className="container mx-auto py-10 px-10 lg:px-0">
      <h2 className="text-2xl font-bold text-center">Categories</h2>
      <hr className="mb-8 mt-3 mx-auto w-20 border-2 rounded-full border-black" />
      <div className="flex gap-3 flex-col md:flex-row md:h-72 md:overflow-hidden mb-3 ">
        <div className="md:w-[40%] overflow-hidden group relative">
          <span className="absolute top-1/2 left-0 right-0 text-white text-2xl z-20">
            <p className="text-center font-black">T-shirt</p>
          </span>
          <div className="bg-gradient-to-r from-black via-slate-900 to-black  absolute z-10 top-0 left-0 right-0 w-full h-full opacity-50"></div>
          <img
            src={tshirt}
            className=" scale-125 w-full group-hover:grayscale duration-100 group-hover:transition group-hover:scale-150"
            alt="tshirt"
          />
        </div>
        <div className="md:w-[60%] overflow-hidden group relative">
          <span className="absolute top-1/2 left-0 right-0 text-white text-2xl z-20">
            <p className="text-center font-black">Pants</p>
          </span>
          <div className="bg-gradient-to-r from-black via-slate-900 to-black absolute z-10 top-0 left-0 right-0 w-full h-full opacity-50"></div>

          <img
            src={pants}
            className=" w-full -mt-10 group-hover:grayscale duration-100 group-hover:transition group-hover:scale-110"
            alt="tshirt"
          />
        </div>
      </div>
      <div className="flex gap-3 flex-col md:flex-row md:h-72 md:overflow-hidden mb-3 ">
        <div className="md:w-[60%] overflow-hidden group relative">
          <span className="absolute top-1/2 left-0 right-0 text-white text-2xl z-20">
            <p className="text-center font-black">Jacket</p>
          </span>
          <div className="bg-gradient-to-r from-black via-slate-900 to-black absolute z-10 top-0 left-0 right-0 w-full h-full opacity-50"></div>

          <img
            src={jacket}
            className=" w-full -mt-10 group-hover:grayscale duration-100 group-hover:transition group-hover:scale-110"
            alt="tshirt"
          />
        </div>
        <div className="md:w-[40%] overflow-hidden group relative">
          <span className="absolute top-1/2 left-0 right-0 text-white text-2xl z-20">
            <p className="text-center font-black">Oversized</p>
          </span>
          <div className="bg-gradient-to-r from-black via-slate-900 to-black  absolute z-10 top-0 left-0 right-0 w-full h-full opacity-50"></div>
          <img
            src={oversized}
            className=" scale-125 w-full group-hover:grayscale duration-100 group-hover:transition group-hover:scale-150"
            alt="tshirt"
          />
        </div>
      </div>
    </div>
  )
}

export default categories
