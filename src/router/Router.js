import { Routes, Route } from 'react-router'
import Home from '../views/Home'
import Products from '../views/Products'
import Detail from '../views/Detail'
import About from '../views/About'

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/products" element={<Products />}></Route>
      <Route path="/products/:category" element={<Products />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  )
}
export default Router
