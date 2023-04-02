import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import { useState } from 'react'

const DetailProduct = (props) => {
  const [currentIndexImg, setCurrentIndexImg] = useState()
  return (
    <section className="py-10 px-8 lg:px-0">
      <div className="container mx-auto">
        {props.showProduct.map((item, index) => {
          return (
            <div
              className="flex flex-col md:flex-row justify-center gap-10 md:py-10"
              key={index}
            >
              <div className="md:w-1/3 p-2 card-shadow overflow-hidden ">
                <img
                  src={
                    currentIndexImg === undefined
                      ? item.image[0]
                      : currentIndexImg
                  }
                  alt={item.name}
                  className="cursor-pointer"
                />
                <div className="flex gap-2 mt-2">
                  {item.image.map((subImg, index) => {
                    return (
                      <img
                        src={subImg}
                        key={index}
                        className="w-28 cursor-pointer hover:grayscale"
                        alt={subImg}
                        onClick={() => {
                          setCurrentIndexImg(subImg)
                        }}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="md:text-3xl text-2xl font-bold truncate capitalize mb-5">
                  {item.name}
                </h2>
                <div className="py-2 flex gap-2">
                  <p className="font-bold text-sm lg:text-lg w-32">Price </p>
                  <p className="font-semibold md:text-xl text-slate-900">
                    IDR {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="py-2 flex gap-2 my-3">
                  <p className="font-bold text-sm lg:text-lg w-32">Variant</p>
                  <div className="flex flex-wrap gap-2">
                    {item.variant.map((item) => {
                      return (
                        <p
                          className=" md:text-sm capitalize text-xs p-1 cursor-pointer border-[1.5px] truncate border-black hover:text-yellow-400 hover:border-yellow-400"
                          onClick={() => {
                            setCurrentIndexImg(item.image_path)
                          }}
                        >
                          {item.color}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <div className="py-2 flex gap-2">
                  <p className="font-bold text-sm lg:text-lg w-32">Qty </p>
                  <div className="flex gap-2">
                    <span className="w-5 text-center bg-yellow-400 cursor-pointer">
                      -
                    </span>
                    <input
                      className="outline outline-1 w-10 text-center"
                      value={0}
                      type="text"
                    />
                    <span className="w-5 text-center  bg-yellow-400 cursor-pointer">
                      +
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button className="w-1/2 py-2 bg-yellow-400">Buy Now</button>
                  <button className="w-1/2 py-2 border-2 border-yellow-400 text-yellow-400">
                    Add To Chart
                  </button>
                </div>
                <div>
                  <p className="py-5 mt-10">Description :</p>
                  <p className="font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    quaerat praesentium qui earum officiis, nulla maxime ullam
                    laborum, veniam, recusandae aperiam tempore unde?
                    Repellendus dolore architecto praesentium commodi nemo
                    maxime provident alias sint! Sint, nisi explicabo maiores
                    dignissimos, nesciunt unde consectetur dolor laboriosam
                    sequi error voluptatum assumenda dolorum? Minima, quia!
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    showProduct: state.showProduct,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSomeAct: () => dispatch({ type: ActionType.ADD_SOME_ACTION }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)
