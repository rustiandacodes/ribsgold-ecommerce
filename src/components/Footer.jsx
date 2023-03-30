import goolePlayStore from '../assets/google-play-store.png'
import appStore from '../assets/app-store.png'

import { span } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-20 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between gap-[10%] py-14">
          <div>
            <span className="font-extrabold text-2xl border-b-4 pb-3 border-yellow-400">
              RIBSGOLD
            </span>
            <p className="text-sm font-extralight text-slate-400 leading-7 my-8">
              is a clothing brand that firmly believe that clothing should not
              only look good but also feel comfortable and be functional for
              everyday wear. We understand that fashion is not just about
              appearance, but also about practicality and comfort. That's why we
              strive to create clothing that not only looks stylish but also
              feels great to wear.
            </p>
            <div className="flex justify-between -ml-8 items-center">
              <img src={goolePlayStore} className="w-full h-fit" alt="" />
              <img src={appStore} className="w-full h-fit" alt="" />
            </div>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl mb-8">Category</h3>
            <ul className="text-slate-400">
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  T-shirt
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Pants
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Jacket/Sweater
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Accessories
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Oversize
                </span>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl mb-8">About</h3>
            <ul className="text-slate-400">
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Company
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Vision
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Mission
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Quality
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Contributions
                </span>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl mb-8">Support</h3>
            <ul className="text-slate-400">
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  FAQ
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Massage Expert
                </span>
              </li>
              <li className="mb-3">
                <span to={'#'} className="font-extralight">
                  Provincial
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-2" />
        <div>
          <p className="uppercase text-slate-400 text-sm mt-8">
            &copy; 2023 ribsgold - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
