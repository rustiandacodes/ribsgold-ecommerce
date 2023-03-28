import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Popular from '../components/Popular'
import WhyPeopleChooseUs from '../components/WhyPeopleChooseUs'

const Home = () => {
  return (
    <div className="pt-14">
      <Hero />
      <WhyPeopleChooseUs />
      <Categories />
      <Popular />
    </div>
  )
}
export default Home
