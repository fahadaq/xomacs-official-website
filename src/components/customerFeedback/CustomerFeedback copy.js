import React from "react"
import customerPhoto from "../../images/Photo.png"
import { ImQuotesLeft } from "react-icons/im"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const CustomerFeedback = ({ testimonials }) => {
  let feedbackCards

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  }

  feedbackCards = 
    <Slider {...settings}>
      {testimonials[0].testimonialsCard.map(fbD => {
        return (
          <span className="my-5">
            <div className="flex flex-col bg-white shadow px-[35px] pt-[35px] pb-3 relative  hover:scale-110 duration-500 cursor-pointer overflow-auto" style={{width:'90%'}}>
              <ImQuotesLeft className="text-teal-600 text-2xl absolute top-4 left-3" />
              <p className="text-[8px] text-gray-500 mt-2">
                {fbD.testimonialsCardDescription}
              </p>
              <span className="flex mt-5">
                <img
                  className="w-8 h-8"
                  src={fbD.testimonialsLogoImg.sourceUrl}
                  alt={fbD.testimonialsLogoImg.altText}
                />
                <span className="flex flex-col justify-center ms-3 -space-y-[3px]">
                  <h1 className="font-bold text-[10px] text-zinc-700">
                    {fbD.testimonialsLogoTitle}
                  </h1>
                  <small className="text-gray-600 text-[8px]">
                    {fbD.testimonialsLogoSubtitle}
                  </small>
                </span>
              </span>
            </div>
          </span>
        )
      })}
    </Slider>
  

  testimonials[0].testimonialsCard.map(fbD => {
    return (
      <div className="flex flex-col bg-white shadow px-[35px] pt-[35px] pb-3 relative w-full hover:scale-110 duration-500 cursor-pointer">
        <ImQuotesLeft className="text-teal-600 text-2xl absolute top-4 left-3" />
        <p className="text-[8px] text-gray-500 mt-2">
          {fbD.testimonialsCardDescription}
        </p>
        <span className="flex mt-5">
          <img
            className="w-8 h-8"
            src={fbD.testimonialsLogoImg.sourceUrl}
            alt={fbD.testimonialsLogoImg.altText}
          />
          <span className="flex flex-col justify-center ms-3 -space-y-[3px]">
            <h1 className="font-bold text-[10px] text-zinc-700">
              {fbD.testimonialsLogoTitle}
            </h1>
            <small className="text-gray-600 text-[8px]">
              {fbD.testimonialsLogoSubtitle}
            </small>
          </span>
        </span>
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center mt-16 md:-mt-5 bg-zinc-100 py-5">
      <span className="uppercase font-bold text-[10px] text-teal-500 mt-5 md:mt-0 lg:mt-5">
        {testimonials[0].testimonialsTitle}
      </span>
      <h1 className="text-2xl font-[800] mb-5">
        {testimonials[0].testimonialsText1}
      </h1>
      <div className="mx-10">{feedbackCards}</div>
    </div>
  )
}

export default CustomerFeedback
