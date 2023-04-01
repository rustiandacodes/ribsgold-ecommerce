import { Routes, Route } from 'react-router'
import Home from '../views/Home'
import Products from '../views/Products'
import Detail from '../views/Detail'

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/products" element={<Products />}></Route>
      <Route path="/products/:category" element={<Products />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  )
}
export default Router
