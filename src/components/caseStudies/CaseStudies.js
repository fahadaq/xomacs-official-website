import React, { useEffect, useState } from "react"
import Masonry from "react-masonry-css"

const CaseStudies = ({ caseStudiesData, ClrStandard }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 760)
  }, [])

  caseStudiesData[0].caseStudiesImageCard.map(v =>
    console.log("caseStudiesData", v)
  )

  const clr0th = ClrStandard[0].colorsStandard.toString()
  const clr1st = ClrStandard[1].colorsStandard.toString()
  const clr2nd = ClrStandard[2].colorsStandard.toString()

  const rootStyle = {
    "--clr0th": clr0th,
    "--clr1st": clr1st,
    "--clr2nd": clr2nd,
  }

  const styles = {
    background: "transparent",
    "&:hover": {
      background: clr0th,
    },
  }

  const ImagesCard = () => {
    return (
      <Masonry
        breakpointCols={{ default: 3, 768: 2, 500: 2 }} // Number of columns at different breakpoints
        className="flex flex-wrap -mx-2 p-10"
        columnClassName="px-2"
      >
        {caseStudiesData[0].caseStudiesImageCard.map((v, i) => (
          <div
            key={i}
            className="grid grid-cols-2 md:flex md:flex-col items-center relative"
          >
            <img
              src={v.caseStudiesCardImage.sourceUrl}
              alt={v.caseStudiesCardImage.textAlt}
              // className="w-full h-full m-2"
              // className="w-full h-auto m-2"
              className="w-full h-auto m-2"
            />
            <div className="text-center text-[15px] bg-white bg-opacity-5 absolute inset-0 flex flex-col justify-center items-center text-white px-5 md:px-4">
              <h1 className="font-bold lg:text-3xl md:text-xl">
                {v.caseStudiesCardTitle}
              </h1>
              <p
                // className="my-5 text-[8px] md:text-[12px]"
                className="my-5 lg:text-xl md:text-[15px]"
              >
                {v.caseStudiesCardText2}
              </p>
              {v.caseStudiesCardBtn && (
                <button
                  style={rootStyle}
                  // className="bgClr w-[38%] md:w-[60%] p-2 rounded-full mt-6 text-white font-bold min-[765]:mt-5"
                  // className="bgClr w-[40%] sm:w-[58%] text-[5px] sm:text-[10px] md:text-xs md:w-[60%] p-0 md:p-2 rounded-full md:mt-6 text-white font-bold"
                  className="bgClr w-[40%] sm:w-[58%] lg:text-xl md:text-xs md:w-[60%] p-0 md:p-2 rounded-full md:mt-6 text-white font-bold"
                >
                  {v.caseStudiesCardBtn}
                </button>
              )}
            </div>
          </div>
        ))}
      </Masonry>
    )
  }

  const ImagesCardGrid = () => {
    return (
      <div
        // className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 overflow-auto"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 md:mx-10"
      >
        {caseStudiesData[0].caseStudiesImageCard.map((v, i) => (
          <div
            key={i}
            // className="grid grid-cols-2"
            // className="gap-4"
            className="relative"
          >
            <img
              src={v.caseStudiesCardImage.sourceUrl}
              alt={v.caseStudiesCardImage.textAlt}
              // className="w-full h-full m-2"
              // className="w-full h-auto m-2"

              className="md:w-full md:h-auto flex items-center justify-center m-auto"
            />
            <div
              // className="text-center text-[15px] bg-white bg-opacity-5 absolute inset-0 flex flex-col justify-center items-center text-white px-5 md:px-4"
              className="grid grid-rows-2 items-center mx-3 absolute top-0 sm:-top-5 md:top-10 text-white w-70 md:w-full"
            >
              {/* <h1 className="font-bold text-[15px] md:text-[18px] m:text-2xl"> */}
              <h1 className="font-bold text-xl md:text-[18px]">
                {v.caseStudiesCardTitle}
              </h1>
              {/* <p className="my-2 text-[12px] md:text-[20px] sm:text-[14px]"> */}
              <p className="my-2  text-[15px] mb:text-[22px]">
                {v.caseStudiesCardText2}
              </p>
              {v.caseStudiesCardBtn && (
                <button
                  style={rootStyle}
                  // className="bgClr w-[38%] md:w-[60%] p-2 rounded-full mt-6 text-white font-bold min-[765]:mt-5"
                  className="bgClr w-auto text-[15px] md:text-xs md:w-[60%] p-0 md:p-2 rounded-full md:mt-6 text-white font-bold"
                  // className="bgClr w-[40%] sm:w-[58%] text-[5px] sm:text-[15px] md:text-xs md:w-[60%] p-0 md:p-2 rounded-full md:mt-6 text-white font-bold"
                >
                  {v.caseStudiesCardBtn}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const TabBar = () => (
    <span className="mx-auto space-x-7 bg-zinc-800 rounded-full text-[8px] md:text-xs flex overflow-x-auto">
      {caseStudiesData[0].caseStudiesNavbar.map((tab, idx) => {
        return (
          <button className="py-1 md:py-3 px-7 hover:bg-green-400 rounded-full">
            {tab.useCaseNavbarText}
          </button>
        )
      })}
    </span>
  )

  // const TabBar = () =>
  //   caseStudiesData[0].caseStudiesNavbar.map((tab, idx) => {
  //     return (
  //       <button className="hover:bg-green-600 hover:p-3 hover:rounded-full text-[10px] md:text-xs w-full">{tab.useCaseNavbarText}</button>
  //   )
  //   })

  return (
    <div
      // className="bg-cover bg-no-repeat h-[1100px] overflow-hidden relative flex justify-center flex-col"
      className="bg-cover bg-no-repeat overflow-hidden relative flex justify-center flex-col"
      style={{
        backgroundImage: `url('${caseStudiesData[0].caseStudiesBgImg.sourceUrl}')`,
      }}
    >
      <h1 className="text-teal-500 font-bold uppercase my-5 text-center tracking-widest text-xs md:text-xl">
        {caseStudiesData[0].caseStudiesText1}
      </h1>
      <h1 className="text-white text-2xl font-bold mb-5 -mt-5 text-center md:text-5xl">
        {caseStudiesData[0].caseStudiesText2}
      </h1>
      <div
        // className="bg-cover bg-no-repeat h-[1100px] overflow-hidden relative"
        // className="bg-cover bg-no-repeat h-[850px] md:h-[900px] overflow-hidden relative flex justify-center flex-col"
        className="bg-cover bg-no-repeat overflow-hidden relative flex justify-center flex-col"
        style={{
          backgroundImage: `url('${caseStudiesData[0].caseStudiesBgImg.sourceUrl}')`,
        }}
      >
        <div className="flex text-white overflow-x-auto mb-5">
          <TabBar />
        </div>
        {/* <div className="bg-zinc-800 space-x-7 p-2 text-white flex md:justify-center overflow-x-scroll md:overflow-auto rounded-full mb-8 md:mb-0 md:mx-10">
          <TabBar />
        </div> */}
        {!isMobile ? <ImagesCard /> : <ImagesCardGrid />}
      </div>
      <button
        style={rootStyle}
        className="bgClr w-[38%] md:w-[20%] my-5 p-2 rounded-full text-white font-bold mx-auto text-xs mb:text-base"
      >
        {caseStudiesData[0].caseStudiesButton}
      </button>
    </div>
  )
}

export default CaseStudies
