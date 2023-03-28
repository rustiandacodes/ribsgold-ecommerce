import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'react-feather'
import { Search } from 'react-feather'
import { Menu } from 'react-feather'

const Navbar = () => {
  return (
    <nav className="shadow-lg px-8 fixed w-full bg-white z-[99]">
      <div className="container mx-auto flex justify-between items-center py-5">
        <span className="uppercase text-xl font-bold">rbsgld</span>
        <div className="hidden lg:block">
          <ul className="flex gap-16 text-sm font-semibold ">
            <li>
              <NavLink
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
            <span className="absolute w-5 -right-2 rounded-full bg-yellow-500 text-white border-2 border-white">
              <p className="text-xs text-center font-semibold text-black">5</p>
            </span>
            <ShoppingCart size={32} />
          </div>
          <div className="md:hidden cursor-pointer">
            <Menu size={32} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
