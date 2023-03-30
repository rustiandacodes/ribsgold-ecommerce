import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Popular from '../components/Popular'
import WhyPeopleChooseUs from '../components/WhyPeopleChooseUs'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div className="pt-12">
      <Hero />
      <Categories />
      <Popular />
      <WhyPeopleChooseUs />
      <Subscribe />
    </div>
  )
}
export default Home
