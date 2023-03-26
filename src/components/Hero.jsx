import heroImg from '../assets/hero.png'
import blob from '../assets/blob.svg'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex-row px-10 md:flex items-center justify-between">
        <div className="md:w-[60%] mb-14">
          <h1 className="heading-1 lg:leading-[50px] leading-[40px] font-extrabold">
            Clothes mean nothing until someone lives in them
          </h1>
          <p className="text-slate-700 mb-8 mt-5 paragraph">
            Style is a way to say who you are without having to speak
          </p>
          <NavLink
            className={'uppercase paragraph bg-yellow-400 p-3'}
            to={'/shop'}
          >
            shop now
          </NavLink>
        </div>
        <div className="md:w-[50%] relative">
          <img src={heroImg} className="w-full" alt="model" />
          <img
            src={blob}
            className="absolute -top-14 scale-110 -left-0 -z-10"
            alt="blobs"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
