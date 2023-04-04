import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'react-feather'
import { Search } from 'react-feather'
import { Menu } from 'react-feather'
import { X } from 'react-feather'

import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

import { useState } from 'react'

const Navbar = (props) => {
  const [hamburger, setHamburger] = useState(true)

  console.log(props.addToChartProducts.length)

  const handleHamburger = () => {
    if (hamburger === true) {
      setHamburger(false)
    } else {
      setHamburger(true)
    }
  }
  return (
    <nav className="shadow-lg px-8 fixed w-full bg-white z-[99]">
      <div className="container mx-auto flex justify-between items-center py-5">
        <span className="uppercase text-xl font-bold">rbsgld</span>
        <div
          className={`${
            hamburger === false ? 'absolute h-screen' : ''
          } top-0 right-0 left-0 w-full md:h-fit z-50 bg-teal-300`}
        >
          <ul
            className={`${
              hamburger === true ? 'hidden md:flex' : ''
            } flex flex-col md:flex-row justify-center items-center bg-white  md:h-fit gap-16 h-full text-sm font-semibold`}
          >
            <li>
              <NavLink
                exact
                className={'hover:border-b-2 border-yellow-400 pb-1 uppercase'}
                to={'/'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'hover:border-b-2 border-yellow-400 pb-1 uppercase'}
                to={'/products'}
              >
                products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'hover:border-b-2 border-yellow-400 pb-1 uppercase'}
                to={'/about'}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'hover:border-b-2 border-yellow-400 pb-1 uppercase'}
                to={'/contact'}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="cursor-pointer">
            <Search size={32} />
          </div>
          <div className="relative cursor-pointer">
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
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSomeAction: (item) =>
      dispatch({ type: ActionType.ADD_SOME_ACTION, results: item }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
