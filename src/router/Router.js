import { Routes, Route } from 'react-router'
import Home from '../views/Home'
import Products from '../views/Products'

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/products" element={<Products />}></Route>
      <Route path="/products/:category" element={<Products />}></Route>
    </Routes>
  )
}
export default Router
