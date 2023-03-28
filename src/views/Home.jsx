import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <div className="pt-14">
      <Hero />
      <Categories />
      <Popular />
    </div>
  )
}
export default Home
