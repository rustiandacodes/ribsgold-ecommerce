import { CheckSquare } from 'react-feather'
import { Users } from 'react-feather'
import { CornerDownLeft } from 'react-feather'

const WhyPeopleChooseUs = () => {
  return (
    <div className="my-16 py-6 bg-neutral-900 text-white">
      <div className="container mx-auto py-16 px-10 lg:px-0">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Why People Choose Us
        </h2>
        <hr className="mb-14 mt-3 mx-auto w-32 border-2 rounded-full border-yellow-400" />
        <div className="flex flex-wrap gap-10 justify-center md:justify-between items-center text-center py-8">
          <div className="md:w-1/4 flex flex-col items-center">
            <CheckSquare color="#fbbf24" size={38} />
            <h3 className="text-lg font-bold my-3">High Quality</h3>
            <p className="text-sm">
              All of our products go through very strict inspection before we
              dispatch them
            </p>
          </div>
          <div className="md:w-1/4 flex flex-col items-center">
            <CornerDownLeft color="#fbbf24" size={38} />
            <h3 className="text-lg font-bold my-3">Easy Return</h3>
            <p className="text-sm">
              Our return policy is simple and that is why customers love our
              shop
            </p>
          </div>
          <div className="md:w-1/4 flex flex-col items-center">
            <Users color="#fbbf24" size={38} />
            <h3 className="text-lg font-bold my-3">Customer Service</h3>
            <p className="text-sm">
              We offer amazing customer service no matter what happens
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WhyPeopleChooseUs
