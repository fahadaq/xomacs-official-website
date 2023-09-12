import React, {useState} from "react"
import bgImg from "../../images/Group_1604.png"
import CustomerFeedback from "../customerFeedback/CustomerFeedback"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Technologies = ({ technologies, testimonials }) => {
  let logosImg
  let logosImgSpec

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  let technologiesRepresentation

  const [data, setData] = useState([]);

  const detectMe = param => {
    setData([])
    technologiesRepresentation = technologies[0].technologiesImgRepeatators.filter(vvvv=>vvvv.technologiesImg.altText.toLowerCase() === param.toLowerCase())

    setData(prev => [...prev, technologiesRepresentation])
  }

  // const btnsObj = technologiesRepresentation ? technologiesRepresentation : technologies[0].technologiesBtnsRepeatator.map(b => {
    const btnsObj = technologies[0].technologiesBtnsRepeatator.map(b => {
    return (
      <button onClick={()=>detectMe(b.technologiesBtn)} className="text-[10px] sm:text-[15px] lg:text-[20px] text-white mx-3 my-2 md:my-0 border rounded-full transition-colors duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-zinc-700 hover:to-teal-500 hover:border-0 px-16 py-0 md:px-2">
        {b.technologiesBtn}
      </button>
    )
  })

  logosImg = <Slider {...settings}>
      {technologies[0].technologiesImgRepeatators.map(lO => {
        return (
          <div>
            <img
              className="flex flex-col m-auto"
              src={lO.technologiesImg.sourceUrl}
              alt={lO.technologiesImg.altText}
            />
          </div>
        )
      })}
      {console.log('ssss',technologiesRepresentation)}
    </Slider>
  
  logosImgSpec = <Slider {...settings}>
      {/* {technologiesRepresentation && technologiesRepresentation?.map(lO => { */}
      {data && data[0]?.map(lO => {
        return (
          <div>
            <img
              className="flex flex-col m-auto"
              src={lO.technologiesImg.sourceUrl}
              alt={lO.technologiesImg.altText}
            />
          </div>
        )
      })}
      {console.log('sssstechnologiesRepresentation',technologiesRepresentation)}
      {console.log('ssssData',data[0])}
    </Slider>

  return (
    <div
      // className="md:bg-contain bg-no-repeat overflow-hidden h-screen"
      className="bg-cover bg-no-repeat overflow-hidden bg-zinc-100"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      <div className="text-white flex flex-col items-center mt-5">
        {/* <img src={bg}/> */}
        <small className="uppercase font-bold text-teal-500 text-[10px]">
          {technologies[0].technologiesTitle}
        </small>
        <h1 className="capitalize font-[600] text-xl">
          {technologies[0].technologies}
        </h1>
        <p className="text-center font-[100] my-5 w-[77%] text-xs leading-5">
          {technologies[0].technologiesTitle2}
        </p>
      </div>
      {/* <btnsObj/> */}
      <div
        className="flex md:justify-center overflow-x-scroll md:overflow-auto
      "
      >
        {btnsObj}
      </div>
      {/* <div className="grid grid-cols-2 md:flex md:justify-center">{btnsObj}</div> */}
      {/* <div className="md:flex grid grid-cols-3 sm:items-center md:flex-row justify-center sm:py-10 md:my-10 my-3">{logosImg}</div> */}
      <div className="py-10">{!data.length ? logosImg : logosImgSpec}</div>
      <CustomerFeedback testimonials={testimonials} />
    </div>
  )
}

export default Technologies
