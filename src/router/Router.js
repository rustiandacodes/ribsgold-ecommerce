import { Routes, Route } from 'react-router'
import Home from '../views/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}
export default Router
