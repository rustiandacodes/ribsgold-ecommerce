import banner from '../assets/0f4f14bc-cd35-4f74-9358-d91dacfe7568.jpg'
const AboutUs = () => {
  console.log('berhasil')
  return (
    <div className="container mx-auto px-5 md:px-0 py-20">
      <div className="flex flex-col md:items-center">
        <h1 className="font-bold text-4xl mb-3">
          We Creted The Highest Level of Quality
        </h1>
        <hr className="border-2 mt-3 mb-12 w-52 border-yellow-400" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 p-5 bg-white card-shadow rounded-xl">
        <div className="md:w-1/2">
          <img src={banner} className="rounded-xl" alt="" />
        </div>
        <div className="md:w-1/2">
          <p className="mb-5">
            Introducing our brand, "Ribsgold", where we strive to elevate your
            wardrobe with premium quality and style. Our clothing is designed to
            provide the ultimate balance between comfort and fashion, ensuring
            that you feel confident and stylish no matter where you go. We take
            pride in using only the highest quality materials in our clothing,
            ensuring that they look and feel great, and last for years to come.
          </p>
          <p className="mb-5">
            Our team of designers is passionate about creating stylish, on-trend
            pieces that are both functional and fashionable. Our brand offers a
            range of clothing options, from casual wear to formal wear, each
            designed to elevate your style and enhance your wardrobe. Our formal
            wear collection features classic designs with a modern twist,
            ensuring that you look sharp and polished for any occasion.
          </p>
          <p className="mb-5">
            Overall, Ribsgold is a brand that is committed to providing the
            ultimate balance of quality, comfort, and style. Our clothing is
            designed to elevate your wardrobe and enhance your style, making you
            feel confident and stylish no matter where you go.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
