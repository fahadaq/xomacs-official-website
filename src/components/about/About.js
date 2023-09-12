import React from "react"

const About = ({ aboutData }) => {
  return (
    <div
    className="bg-cover bg-no-repeat overflow-hidden"
    style={{ backgroundImage: `url('${aboutData[0].aboutBg.sourceUrl}')` }}
    >
      <div className="flex flex-col-reverse md:flex-row mx-10 justify-between items-center py-20">
        {/* Left Side */}
        <div className="w-[30%] relative">
          <div className="mt-5 -ms-20 md:-ms-0 md:mt-0 h-56 w-56 md:h-70 md:w-70">
            <img
              src={aboutData[0].aboutLeftImg.sourceUrl}
              alt={aboutData[0].aboutLeftImg.altText}
            />
          </div>
          <div>
            <span className="absolute bottom-3 -right-20 lg:right-32 xl:right-40 2xl:right-96 bg-slate-900 p-3 px-3 z-10 flex rounded-lg items-center space-x-2">
              <img
                src={aboutData[0].aboutLeft.sourceUrl}
                alt={aboutData[0].aboutLeft.altText}
                className="h-10 w-10"
              />
              <span className="text-white">
                <h1 className="font-bold tracking-wider">
                  {aboutData[0].aboutLeftSubText.slice(0, 5)}
                </h1>
                <h1 className="w-full text-[12px]">
                  {aboutData[0].aboutLeftSubText.slice(5)}
                </h1>
              </span>
            </span>
          </div>
          </div>
          {/* Right Side */}
          <div className=" md:w-[50%] space-y-2">
            <h1 className="text-green-800 text-sm uppercase font-bold">
              {aboutData[0].aboutRightText1}
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-blue-950">
              {aboutData[0].aboutRightText2}
            </h1>
            <h1 className="font-bold">
              {aboutData[0].aboutRightText3}
            </h1>
            <h1 className="text-sm text-zinc-500">
              {aboutData[0].aboutRightText4}
            </h1>
          </div>
        </div>
      </div>
  )
}

export default About
