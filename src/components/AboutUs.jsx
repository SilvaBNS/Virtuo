

const AboutUs = () => {
  return (
    <div className="mt-20 flex flex-wrap justify-center">
        <div className="text-md mb-20 text-neutral-400 p-10 w-full lg:w-2/3 text-xl text-justify">
        Discover our story, where innovation meets passion. We're dedicated to pushing the boundaries of virtual reality, creating immersive experiences that transform the way people interact with technology. Our mission is to empower users with cutting-edge VR solutions that enhance creativity, productivity, and entertainment. Guided by our core values of innovation, integrity, and customer-centricity, we strive to make a meaningful impact on the world through technology.
        </div>
        <div className="p-2 pl-5 w-full lg:w-1/3">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl text-left mt-6 tracking-wide">
            Learn more about our 
            <span className="bg-gradient-to-r from-pink-700 to-cyan-600 text-transparent bg-clip-text">{" "}journey</span> to 
            <span className="bg-gradient-to-r from-pink-700 to-cyan-600 text-transparent bg-clip-text">{" "}innovations</span>
        </h2>
        <div className="flex justify-start my-5">
            <a href="#" className="py-3 px-4 rounded-md border">
                Learn More
            </a>
          </div>
        </div>
    </div>
  )
}

export default AboutUs