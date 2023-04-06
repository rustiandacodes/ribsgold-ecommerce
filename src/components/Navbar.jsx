import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'react-feather'
import { Search } from 'react-feather'
import { Menu } from 'react-feather'
import { X } from 'react-feather'

import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

import { useState } from 'react'

const Navbar = (props) => {
  const [hamburger, setHamburger] = useState(true)
  const navigate = useNavigate()
  const [navChoice, setNavChoice] = useState('/')

  const handleHamburger = () => {
    hamburger === true ? setHamburger(false) : setHamburger(true)
  }

  const handleAddTochartButton = () => {
    props.showAddToChart === false
      ? props.handleShowAddToChart(true)
      : props.handleShowAddToChart(false)
  }

  return (
    <nav className="shadow-lg px-8 fixed w-full bg-white z-[99]">
      <div className="container mx-auto flex justify-between items-center py-5">
        <span
          className="uppercase text-xl font-black cursor-pointer"
          onClick={() => navigate('/')}
        >
          RIBSGOLD
        </span>
        <div
          className={`${
            hamburger === false ? 'absolute h-screen' : ''
          } top-0 right-0 left-0 w-full md:h-fit z-50`}
        >
          <ul
            className={`${
              hamburger === true ? 'hidden md:flex' : ''
            } flex flex-col md:flex-row justify-center items-center bg-white  md:h-fit gap-16 h-full text-sm font-semibold`}
          >
            <li>
              <span
                className={`${
                  navChoice === '/' ? 'active' : ''
                } hover:opacity-60 cursor-pointer uppercase pb-1 `}
                onClick={() => {
                  setNavChoice('/')
                  navigate('/')
                }}
              >
                Home
              </span>
            </li>
            <li>
              <span
                className={`${
                  navChoice === 'products' ? 'active' : ''
                } hover:opacity-60 cursor-pointer uppercase pb-1`}
                onClick={() => {
                  setNavChoice('products')
                  navigate('/products')
                }}
              >
                products
              </span>
            </li>
            <li>
              <span
                className={`${
                  navChoice === 'about' ? 'active' : ''
                } hover:opacity-60 cursor-pointer uppercase pb-1`}
                onClick={() => {
                  setNavChoice('about')
                  navigate('/about')
                }}
              >
                About
              </span>
            </li>
            <li>
              <span
                className={`${
                  navChoice === 'contact' ? 'active' : ''
                } hover:opacity-60 cursor-pointer uppercase pb-1`}
                onClick={() => {
                  setNavChoice('contact')
                  navigate('/contact')
                }}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="cursor-pointer">
            <Search size={32} />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              handleAddTochartButton()
            }}
          >
            <span
              className={`${
                props.addToChartProducts.length === 0 ? 'hidden' : ''
              } absolute w-6 p-[2px] -right-3 -top-1 rounded-full bg-yellow-500 text-white border-2 border-white`}
            >
              <p className="text-xs text-center font-semibold text-black">
                {props.addToChartProducts.length}
              </p>
            </span>
            <ShoppingCart size={32} />
          </div>
          <div
            className="md:hidden cursor-pointer z-50"
            onClick={() => {
              handleHamburger()
            }}
          >
            {hamburger === true ? <Menu size={32} /> : <X size={32} />}
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    addToChartProducts: state.addToChartProducts,
    showAddToChart: state.showAddToChart,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleShowAddToChart: (value) =>
      dispatch({ type: ActionType.SHOW_ADD_TO_CHART, results: value }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
