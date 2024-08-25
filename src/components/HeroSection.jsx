import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            <span>Step Into a New Dimension of </span>
            <span className="bg-gradient-to-r from-pink-700 to-cyan-600 text-transparent bg-clip-text">
              Virtual Reality 
            </span>
            <span> with </span>
            <span className="bg-gradient-to-r  from-cyan-600 to-pink-700 text-transparent bg-clip-text">
              Virtuo
            </span>
          </h1>

          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Experience unparalleled immersion and adventure with the latest in virtual reality technology. Redefine your sense of presence and explore new worlds from the comfort of your home!
          </p>

          <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r  from-cyan-600 to-pink-700 py-3 px-4 mx-3 rounded-md">
                Shop Now
            </a>
            <a href="#" className="py-3 px-4 rounded-md border">
                Learn More
            </a>
          </div>
      </div>
    )
  }
  
  export default HeroSection