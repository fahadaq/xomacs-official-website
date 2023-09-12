import React, { useState } from "react"
import ReactDOM from "react-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const Affiliation = ({ affiliation }) => {
  // const isMobile = window.innerWidth <= 768;
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830)

  return (
    <div className="w-full bg-white">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        showArrows={true}
        interval={3000}
        autoPlay
        infiniteLoop={true}
        slidesToShow={6}
        centerMode
        centerSlidePercentage={!isMobile ? 15 : 100}
        // centerPadding="-50px"
        className="pt-8 mx-10"
      >
        {/* <Carousel {...settings}> */}
        {affiliation[0].affiliationImage.map((vvv, i) => (
          <div
            key={i}
            // className='h-28 w-28'
            // className="mx-auto h-28 w-28 pt-5 -ms-60"
            className={`mx-auto h-28 w-28 pt-5 ${!isMobile ? '-ms-60' : '' } `}
          >
            <img src={vvv.affiliationImg.sourceUrl} />
            {/* <p className="legend">{vvv.affiliationImg.altText}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Affiliation
