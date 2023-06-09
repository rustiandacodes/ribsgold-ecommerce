import model from '../assets/model.png'
import fest1 from '../assets/fest1.png'
import fest2 from '../assets/fest2.png'
import fest3 from '../assets/fest3.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

const Hero = (props) => {
  return (
    <div className="container mx-auto py-10 px-10 lg:px-0">
      <div className="flex-row md:flex md:items-center md:justify-between">
        <div className="lg:w-[50%] mt-10 mb-20 lg:mb-0">
          <h1 className="md:text-4xl text-3xl lg:leading-[50px] leading-[40px] font-extrabold">
            Clothes mean nothing until someone lives in them
          </h1>
          <p className="text-slate-400 mb-8 mt-5 2xl italic">
            "Your fashion style is your personal canvas, where you paint your
            unique identity and showcase it to the world with every stitch and
            seam."
          </p>
          <NavLink
            className={
              'uppercase font-semibold shadow-md bg-yellow-400 hover:bg-yellow-500 p-3 rounded-lg'
            }
            to={'/products'}
            onClick={() => {
              props.handleChangePage('products')
            }}
          >
            shop now
          </NavLink>
          <div className="mt-10 hidden lg:block">
            <div className="flex gap-8 ">
              <img src={fest3} className="w-20 grayscale" alt="fest-logo" />
              <img src={fest2} className="w-20 grayscale" alt="fest-logo" />
              <img src={fest1} className="w-20 grayscale" alt="fest-logo" />
            </div>
            <p className="text-xs mt-3 text-slate-400 font-extralight">
              What you wear is how you present yourself to the world, especially
              today, when human contacts are so quick. Fashion is instant
              language I firmly believe that with the right footwear one can
              rule the world. It's not just about the clothes, but the way they
              make you feel and the message they convey.
            </p>
          </div>
        </div>
        <div className="lg:w-[50%] relative">
          <img src={model} className="scale-125 md:scale-90" alt="model" />
        </div>
      </div>
      <div className="lg:hidden mt-16">
        <div className="flex justify-center">
          <img src={fest3} className="w-24 grayscale" alt="fest-logo" />
          <img src={fest2} className="w-24 grayscale" alt="fest-logo" />
          <img src={fest1} className="w-24 grayscale" alt="fest-logo" />
        </div>
        <p className="text-xs mt-3 text-slate-400 font-extralight text-center">
          What you wear is how you present yourself to the world, especially
          today, when human contacts are so quick. Fashion is instant language I
          firmly believe that with the right footwear one can rule the world.
        </p>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    pageNow: state.pageNow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePage: (items) =>
      dispatch({ type: ActionType.CHANGE_PAGE, results: items }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
