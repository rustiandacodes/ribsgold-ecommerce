import goolePlayStore from '../assets/google-play-store.png'
import appStore from '../assets/app-store.png'

import { ChevronDown } from 'react-feather'
import { ChevronUp } from 'react-feather'

import { useState } from 'react'

const Footer = () => {
  const [showCategory, setShowCategory] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showSupport, setShowSupport] = useState(false)

  const handleShowCategory = () => {
    if (showCategory === false) {
      setShowCategory(true)
    } else {
      setShowCategory(false)
    }
  }
  const handleShowAbout = () => {
    if (showAbout === false) {
      setShowAbout(true)
    } else {
      setShowAbout(false)
    }
  }
  const handleShowSupport = () => {
    if (showSupport === false) {
      setShowSupport(true)
    } else {
      setShowSupport(false)
    }
  }

  return (
    <footer className="bg-neutral-900 md:py-20 py-14 text-white px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-[10%]">
          <div className="mb-10 md:mb-0">
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
          <div className="md:w-1/3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl md:mb-3">Category</h3>
              <div
                className="cursor-pointer md:hidden"
                onClick={() => {
                  handleShowCategory()
                }}
              >
                {showCategory === false ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            <ul
              className={`${
                showCategory === false ? 'block' : 'hidden'
              } text-slate-400 md:block`}
            >
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
            <hr className="mb-3 md:hidden" />
          </div>
          <div className="md:w-1/3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl md:mb-3">About</h3>
              <div
                className="cursor-pointer md:hidden"
                onClick={() => {
                  handleShowAbout()
                }}
              >
                {showAbout === false ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            <ul
              className={`${
                showAbout === false ? 'block' : 'hidden'
              } text-slate-400 md:block`}
            >
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
            <hr className="mb-3 md:hidden" />
          </div>
          <div className="md:w-1/3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl md:mb-3">Support</h3>
              <div
                className="cursor-pointer md:hidden"
                onClick={() => {
                  handleShowSupport()
                }}
              >
                {showSupport === false ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            <ul
              className={`${
                showSupport === false ? 'block' : 'hidden'
              } text-slate-400 md:block`}
            >
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
            <hr className="mb-3 md:hidden" />
          </div>
        </div>
        <hr className="border-1 hidden md:block" />
        <div className="flex flex-col-reverse md:flex-row gap-8 justify-between items-center py-10 text-slate-400">
          <p className="uppercase text-sm">
            &copy; 2023 ribsgold - All Rights Reserved
          </p>
          <div className="flex gap-5 cursor-pointer">
            <svg
              className="fill-current"
              width={30}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <svg
              className="fill-current"
              width={30}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
            <svg
              className="fill-current"
              width={30}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <svg
              className="fill-current"
              width={30}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Shopee</title>
              <path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
