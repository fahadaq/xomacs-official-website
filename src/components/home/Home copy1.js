import React from "react"

const Home = ({ homeData, ClrStandard }) => {
  const clr0th = ClrStandard[0].colorsStandard.toString()
  const clr1st = ClrStandard[1].colorsStandard.toString()
  const clr2nd = ClrStandard[2].colorsStandard.toString()

  const rootStyle = {
    "--clr0th": clr0th,
    "--clr1st": clr1st,
    "--clr2nd": clr2nd,
  }


  return (
    <div
      // className="bg-contain bg-no-repeat overflow-hidden"
      className="bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('${homeData[0].heroBgImg.sourceUrl}')` }}
    >
      <div className="container flex flex-col mx-2 mt-16">
        <div className="flex-col md:flex-row-reverse md:p-10 flex sm:flex-col-reverse sm:pt-[150px]">
          <div className="w-full">
          {/* <div> */}
          <img
            // className="postion-absolute md:position-default md:h-[550px] md:me-10 w-full h-auto blur md:blur-0"
            className="postion-absolute md:position-default md:h-[600px] md:me-10 w-full h-auto blur md:blur-0"
            src={homeData[0].heroFrontImg.sourceUrl}
            alt={homeData[0].heroFrontImg.title}
          />
          </div>
          {/* <div className="flex flex-col m-auto mb-[70px] md:bg-transparent absolute top-40 md:top-0 mx-10 h-screen md:h-52 md:relative"> */}
          <div className="w-full flex flex-col m-auto md:bg-transparent absolute top-40 md:top-0 mb-40 h-screen md:h-52 md:relative mx-8 sm:mx-0">
            <h1 
            // className="uppercase font-light text-xl md:text-sm"
            className="uppercase font-light text-xs sm:text-xl md:text-xs tracking-widest"
            style={{
              color:clr0th
            }}
            >
              {homeData[0].heroTitle1}
            </h1>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl capital w-[290px] sm:w-[360px] lg:w-[460px] leading-tight font-semibold">
              {homeData[0].heroTitle2.slice(
                0,
                homeData[0].heroTitle2.indexOf("product")
              )}
              <span className="text-orange-300">
                {homeData[0].heroTitle2.slice(
                  homeData[0].heroTitle2.indexOf("product"),
                  homeData[0].heroTitle2.indexOf("product") + 8
                )}
              </span>
              {homeData[0].heroTitle2.slice(
                homeData[0].heroTitle2.indexOf("product") + 8
              )}
            </h1>
            <button
              style={rootStyle}
                className="bgClr w-[50%] lg:w-[40%] p-2 rounded-full text-xs sm:text-xl mt-6 text-white font-bold md:text-[14px]"
            >
              {homeData[0].heroButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
