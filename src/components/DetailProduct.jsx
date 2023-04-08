import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import { useEffect, useState } from 'react'

const DetailProduct = (props) => {
  const [currentIndexImg, setCurrentIndexImg] = useState()
  const [variant, setVariant] = useState('')
  const [size, setSize] = useState('')
  const [counter, setCounter] = useState(1)
  const [alert, setAlart] = useState('')
  const [showAlart, setShowAlart] = useState(false)

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const handleMinus = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(1)
  }

  useEffect(() => {
    if (props.showProducts[0].variant.length === 0) {
      setVariant('No Variant')
    }
    if (props.showProducts[0].size.length === 0) {
      setSize('Unisex')
    }
  }, [props.showProducts])

  const setAddToChartData = (name, img, price) => {
    const data = {
      name: name,
      price: price * counter,
      img: img,
      qty: counter,
      variant: variant,
      size: size,
    }

    if (data.variant === '' && data.size === '') {
      setAlart('⚠️ please select variant or size product')
      console.log(alert)
    } else if (data.variant === '') {
      setAlart('⚠️ please select variant product')
      console.log('⚠️ please select variant product')
    } else if (data.size === '') {
      setAlart('⚠️ please select size product')
      console.log('⚠️ please select size product')
    } else {
      setAlart('✅ your product succesfully added')
      props.handleAddToChart(data)
    }

    setShowAlart(true)
    setTimeout(() => {
      setShowAlart(false)
    }, 5000)
  }
  console.log(showAlart)

  return (
    <section className="py-8 md:py-10 md:mt-5 bg-slate-100 ">
      <div className="text-center fixed left-0 w-full">
        <p
          className={`${
            showAlart === true ? 'block' : 'hidden'
          } mx-auto w-96 rounded-lg py-2 ease-in-out translate-y-8 md:translate-y-0 shadow-lg font-semibold bg-yellow-200`}
        >
          {alert}
        </p>
      </div>
      <div className="container py-8 mx-auto rounded-xl  px-8 lg:px-0 bg-white">
        {props.showProducts.map((item, index) => {
          return (
            <div
              className="flex flex-col md:flex-row justify-center gap-14 md:py-10"
              key={index}
            >
              <div className="md:w-1/3  ">
                <div className="card-shadow p-3 rounded-xl overflow-hidden">
                  <img
                    src={
                      currentIndexImg === undefined
                        ? item.image[0]
                        : currentIndexImg
                    }
                    alt={item.name}
                    className="cursor-pointer rounded-lg"
                  />
                  <div className="flex gap-2 w-full mt-2">
                    {item.image.map((subImg, index) => {
                      return (
                        <img
                          src={subImg}
                          key={index}
                          className="w-1/3 cursor-pointer hover:grayscale rounded-lg"
                          alt={subImg}
                          onClick={() => {
                            setCurrentIndexImg(subImg)
                          }}
                          onMouseEnter={() => {
                            setCurrentIndexImg(subImg)
                          }}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="md:text-3xl text-2xl font-bold truncate capitalize mb-5">
                  {item.name}
                </h2>
                <div className="py-2 flex gap-2">
                  <p className="font-bold text-sm lg:text-lg w-[30%]">Price </p>
                  <p className="md:text-xl w-[70%] text-slate-900">
                    IDR {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="py-2 flex gap-2 my-3">
                  <p className="font-bold text-sm lg:text-lg w-[30%]">
                    Variant
                  </p>
                  <div className="flex flex-wrap gap-2 w-[70%]">
                    {item.variant.length === 0
                      ? 'No variant'
                      : item.variant.map((item, index) => {
                          return (
                            <p
                              className={`md:text-sm capitalize text-xs py-1 px-2 cursor-pointer border-[1.5px] truncate rounded-md hover:text-yellow-400 hover:border-yellow-400 ${
                                variant === item.color
                                  ? 'text-yellow-400 border-yellow-400'
                                  : 'border-black'
                              }`}
                              key={index}
                              onClick={() => {
                                setVariant(item.color)
                                setCurrentIndexImg(item.image_path)
                              }}
                            >
                              {item.color}
                            </p>
                          )
                        })}
                  </div>
                </div>
                <div className="py-2 flex gap-2 my-3">
                  <p className="font-bold text-sm lg:text-lg w-[30%]">Size</p>
                  <div className="flex flex-wrap gap-2 w-[70%]">
                    {item.size.length === 0
                      ? 'Unisex'
                      : item.size.map((item, index) => {
                          return (
                            <p
                              className={`md:text-sm uppercase text-xs py-1 px-3 rounded-md cursor-pointer border-[1.5px] truncate  hover:text-yellow-400 hover:border-yellow-400 ${
                                size === item
                                  ? 'text-yellow-400 border-yellow-400'
                                  : 'border-black'
                              }`}
                              key={index}
                              onClick={() => {
                                setSize(item)
                              }}
                            >
                              {item}
                            </p>
                          )
                        })}
                  </div>
                </div>
                <div className="py-2 flex gap-2">
                  <p className="font-bold text-sm lg:text-lg w-[30%]">Qty </p>
                  <div className="flex gap-2 w-[70%]">
                    <span
                      className="w-5 text-center bg-yellow-400 cursor-pointer rounded-md"
                      onClick={() => handleMinus()}
                    >
                      -
                    </span>
                    <input
                      className="outline outline-1 w-10 text-center rounded-md"
                      value={counter}
                      type="text"
                    />
                    <span
                      className="w-5 text-center  bg-yellow-400 cursor-pointer rounded-md"
                      onClick={() => handlePlus()}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button className="w-1/2 py-2 bg-yellow-400 rounded-lg font-semibold">
                    Buy Now
                  </button>
                  <button
                    className="w-1/2 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg font-semibold"
                    onClick={() => {
                      setAddToChartData(
                        props.showProducts[0].name,
                        props.showProducts[0].image,
                        props.showProducts[0].price,
                      )
                    }}
                  >
                    Add To Chart
                  </button>
                </div>
                <div>
                  <p className="py-5 mt-10">Description :</p>
                  <p className="font-extralight">
                    We gave range of high-quality garments that are crafted from
                    soft, breathable fabrics, ensuring maximum comfort
                    throughout the day. Our collection includes casual t-shirts,
                    comfortable pants, and stylish hoodies - all designed to
                    help you look and feel your best, no matter where you go.
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
    showProducts: state.showProducts,
    addToChartProducts: state.addToChartProducts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToChart: (item) =>
      dispatch({ type: ActionType.ADD_TO_CHART, results: item }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)
