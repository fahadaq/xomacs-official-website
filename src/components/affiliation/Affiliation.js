import React, { useState } from "react"
import ReactDOM from "react-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Affiliation = ({ affiliation }) => {
  // const isMobile = window.innerWidth <= 768;
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: !isMobile ? 7 : 2,
    slidesToScroll: 1 ,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  }

  return (
    // <div className="w-full bg-white my-10">
    <div className="w-full bg-white my-10">
      <Slider {...settings}>
      {affiliation[0].affiliationImage.map((vvv, i) => {
        return (
          <div
          key={i}
          // className='m-auto h-40 pt-5'
          className='space-x-36 pt-2 md:pt-8'
          >
            <img src={vvv.affiliationImg.sourceUrl} 
            // className="h-10 w-auto"
            className="h-auto w-auto my-2 tb:my-16 px-2 md:px-5"
            />
          </div>
        )
      })}
    </Slider>
    </div>
  )
}

export default Affiliation
