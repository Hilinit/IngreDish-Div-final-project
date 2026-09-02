import { NavLink } from 'react-router-dom'
import Statistics from './Statistics'
import Suggestion from './Suggestion'

function Hero() {
  return (
    <div style={{ backgroundImage: `url(/assets/hero-bg.jpg)` }} className="h-screen w-full bg-cover bg-center flex justify-start relative overflow-x-hidden">
      <div className="w-full lg:w-4/6 h-full bg-gradient-to-b lg:bg-gradient-to-r from-[#C2410C]/80 dark:from-[#C2410C]/70 via-[#FFF]/50 lg:via-[#FFF]/50 dark:via-neutral-950/60 to-[#9A3412]/90 lg:to-transparent flex flex-col justify-center px-6 sm:px-14 lg:px-20 relative transition-colors">
        <h1 className="text-white text-6xl sm:text-7xl lg:text-9xl font-semibold">
          Good <span className="text-[#C2410C] dark:text-orange-600 h1">Food</span>
          <br />
          Good <span className="text-[#C2410C] dark:text-orange-500 h1">Mood</span>
        </h1>
        <p className="block text-white/90 dark:text-gray-300 text-sm sm:text-xl mt-4 w-full lg:w-[600px]">
          Minlərlə resept arasından seçim et, Öz ərzaqlarına uyğun reseptləri tap və Sevdiklərini yadda saxla
        </p>
        <div className="mt-6 flex flex-col sm:flex-row lg:flex w-full lg:w-[500px] gap-3 lg:gap-0">
          <NavLink to='/recepies' className="w-full lg:w-auto">
            <button className="w-full lg:w-auto px-6 py-3.5 lg:py-3 bg-[#C2410C] hover:bg-[#9A3412] text-white rounded-xl lg:rounded-lg shadow-md transition duration-300 text-center font-medium">
              Reseptlərə bax
            </button>
          </NavLink> 
          <NavLink to='/whaticook' className="w-full lg:w-auto">
            <button className="w-full lg:w-auto lg:ml-4 px-6 py-3.5 lg:py-3 bg-white dark:bg-neutral-900 text-[#C2410C] dark:text-orange-400 rounded-xl lg:rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-300 text-center font-medium">
              Məndə bunlar var, nə bişirim?
            </button>
          </NavLink> 
        </div>
        <div className="mt-4 lg:absolute lg:bottom-10 lg:-translate-y-1/2 xl:right-[-420px] z-20 w-full lg:w-auto">
          <Suggestion />
        </div>
        <div className="mt-6 lg:mt-10">
          <Statistics />
        </div>
      </div>
    </div>
  )
}

export default Hero