import Slider from 'react-slick'
import { products } from '../service'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

const Popular = (props) => {
  const navigate = useNavigate()
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array
  }

  const popular = shuffle(products).slice(0, 9)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="container mx-auto py-10 px-10 lg:px-0">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Popular This Week
      </h2>
      <hr className="mb-12 mt-3 mx-auto w-32 border-2 rounded-full border-yellow-400" />
      <Slider {...settings}>
        {popular.map((item, index) => {
          return (
            <div
              key={index}
              className="w-1/4 cursor-pointer py-6 p-3"
              onClick={() => {
                props.handleChangePage('products')
                props.handleShowProduct([item])
                navigate('/detail')
              }}
            >
              <div className="card-shadow rounded-xl">
                <img
                  src={item.image[0]}
                  className="rounded-t-xl"
                  alt={item.name}
                />
                <div className="p-3">
                  <h3 className="capitalize font-bold">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <div className="py-2">
                      <p className="text-sm text-slate-900">
                        IDR {item.price.toLocaleString()}
                      </p>
                      <p className="text-xs line-through mt-1 text-slate-700">
                        IDR {(item.price + 54000).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-700">
                      <AiFillStar className="text-yellow-400 text-xl" />
                      <p>4.5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    showProduct: state.showProduct,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowProduct: (items) =>
      dispatch({ type: ActionType.CHANGE_SHOW_PRODUCT, results: items }),
    handleChangePage: (items) =>
      dispatch({ type: ActionType.CHANGE_PAGE, results: items }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
