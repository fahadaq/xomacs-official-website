import React from "react"
import customerPhoto from "../../images/Photo.png"
import { ImQuotesLeft } from "react-icons/im"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const CustomerFeedback = ({ testimonials }) => {
  let feedbackCards

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

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
          breakpoint: 764,
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
            // slidesToShow: 1.3,
            // slidesToShow: 1.4,
            slidesToScroll: 1
          }
        },
      ]
  };

  feedbackCards = 
  <div className="md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[3000px]">
    <Slider {...settings}>
      {testimonials[0].testimonialsCard.map(fbD => {
        return (
          <span className="">
          {/* <span className="my-5 bg-fuchsia-500"> */}
            <div className="flex flex-col bg-white shadow px-[35px] pt-[35px] pb-3 relative hover:scale-110 duration-500 cursor-pointer overflow-auto" style={{width:'90%'}}>
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
      </div>
  

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
    <div className="flex flex-col items-center -mt-32 mb:-mt-28 sm:-mt-20 bg-zinc-100 py-5">
      <span className="uppercase font-bold text-[10px] text-teal-500 mt-5 md:mt-0 lg:mt-5">
        {testimonials[0].testimonialsTitle}
      </span>
      <h1 className="text-2xl font-[800] mb-5">
        {testimonials[0].testimonialsText1}
      </h1>
      {/* <div className="mx-36">{feedbackCards}</div> */}
      <div className="w-[90%] ml-8 md:ml-0">{feedbackCards}</div>
      {/* <div className="w-[90%] mb:w-[70%] ml-8 md:ml-0">{feedbackCards}</div> */}
    </div>
  )
}

export default CustomerFeedback
