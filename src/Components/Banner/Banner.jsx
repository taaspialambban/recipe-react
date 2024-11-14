
import profile from '../../assets/image/Banner.jpg'

const Banner = () => {
    return (
        <div
        className="bg-cover max-w-6xl md:mx-auto bg-center rounded-lg h-80 md:h-96"
        style={{
          backgroundImage:  `url(${profile})`
        }}
      >
        <div className="font-lexend text-center h-full md:w-[797px] w-[400px] mx-auto my-4 p-5 space-y-4">
          <h1 className="text-white text-2xl md:text-5xl font-bold">
          Discover an exceptional cooking class tailored for you!
          </h1>
          <p className='text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
          <div className='space-x-3'>
            <button className='bg-[#0BE58A] rounded-2xl w-[161px] h-[44px]'>Explore Now</button>
            <button className='text-white border-white border-2  rounded-2xl w-[161px] h-[44px]'>Our Feedback</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;