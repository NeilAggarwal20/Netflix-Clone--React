import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '/src/assets/assets/hero_banner.jpg'
import hero_title from '/src/assets/assets/hero_title.png'
import play_icon from '/src/assets/assets/play_icon.png'
import info_icon from '/src/assets/assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div className="">
      <Navbar />

      {/* ------ HERO SECTION ------ */}
      <div className="relative w-full aspect-[16/7] min-h-[350px] max-h-[620px] overflow-hidden">

        {/* HERO BANNER BACKGROUND */}
        <img
          src={hero_banner}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* --- HERO CONTENT OVER BANNER --- */}
        <div
          className="
            absolute 
            top-1/2 left-1/2 md:left-[400px]
            -translate-x-1/2 -translate-y-1/2
            w-[90vw] max-w-2xl
            flex flex-col
            items-start
            px-3 sm:px-8
            space-y-3
          "
        >
          {/* HERO TITLE */}
          <img
            src={hero_title}
            alt=""
            className="
              w-2/3 max-w-[400px] min-w-[150px]
              h-auto
              drop-shadow-lg
              mb-1
            "
          />
          {/* HERO DESCRIPTION */}
          <p
            className="
              text-sm sm:text-base md:text-lg
              text-white font-medium
              drop-shadow-md
              max-w-xl
              mb-2
            "
          >
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul <br className="hidden sm:block" />
            embarks on a quest to save the city from an immortal enemy.
          </p>
          {/* --- PLAY & MORE INFO BUTTONS --- */}
          <div className="flex flex-row gap-2 sm:gap-5 z-10">
            <button className="
              flex flex-row items-center 
              bg-white text-black
              font-bold
              px-4 py-2 sm:px-8
              rounded
              text-xs sm:text-sm
              shadow hover:bg-gray-300
              transition
              focus:outline-none focus:ring-2 focus:ring-white
            ">
              <img src={play_icon} alt="" className="h-5 w-auto mr-2" />
              Play
            </button>
            <button className="
              flex flex-row items-center
              bg-[#6d6d6eb3] text-white
              font-bold
              px-4 py-2 sm:px-6
              rounded
              text-xs sm:text-sm
              hover:bg-[#6d6d6e91]
              transition
              shadow
              focus:outline-none focus:ring-2 focus:ring-white
            ">
              <img src={info_icon} alt="" className="h-6 w-auto mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* --- MOVIE ROWS --- */}
      <TitleCards title={'Blockbuster Movies'} category={'top_rated'} />
      <TitleCards title={'Only on Netflix'} category={'popular'} />
      <TitleCards title={'Upcoming'} category={'upcoming'} />
      <TitleCards title={'Top Pics For You'} category={'now_playing'} />

      <Footer />
    </div>
  )
}

export default Home
