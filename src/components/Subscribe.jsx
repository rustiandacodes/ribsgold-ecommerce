const Subscribe = () => {
  return (
    <div className="container mx-auto py-14 my-16 px-10">
      <h2 className="text-4xl font-bold text-center">
        Subscribe to our Newsletter
      </h2>
      <hr className="mb-14 mt-3 mx-auto w-32 border-2 rounded-full border-yellow-400" />
      <p className="text-center">We promise to be polite and not bore you </p>
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-center items-center mt-8">
        <input
          type="email"
          className="md:w-1/3 w-full border-2 border-yellow-400 p-2 focus:outline-none"
          placeholder="Your Email"
        />
        <button className="w-full md:w-fit px-8 py-2 bg-yellow-400 border-2 border-yellow-400">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe
