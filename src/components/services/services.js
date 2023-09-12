import React from "react"

const Services = ({ servicesData, ClrStandard }) => {
  const clr0th = ClrStandard[0].colorsStandard.toString()
  const clr1st = ClrStandard[1].colorsStandard.toString()
  const clr2nd = ClrStandard[2].colorsStandard.toString()

  const rootStyle = {
    "--clr0th": clr0th,
    "--clr1st": clr1st,
    "--clr2nd": clr2nd,
  }


  const Cards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:mx-20">
      {servicesData[0].servicesCard.map(v => (
        <div className="p-5">
          <img src={v.service?.sourceUrl} alt={v.service?.textAlt} />
          <h1 className="font-bold">{v.serviceCardTitle}</h1>
          <p className="text-zinc-500">{v.serviceCardDescription}</p>
        </div>
      ))}
    </div>
  )

  return (
    <div className="my-10 m-auto flex flex-col justify-center items-center">
      <h1 className="uppercase text-teal-600 font-[400] text-xs mb:text-base">
        {servicesData[0].serviceText1}
      </h1>
      <h1 className="text-[26px] mb:text-4xl sm:text-[30px] font-bold text-zinc-700">
        {servicesData[0].serviceText2}
      </h1>
      {/* Card */}
      <div>
        <Cards />
      </div>
      <button
        style={rootStyle}
        className="bgClr w-[38%] md:w-[22%] p-2 rounded-full mt-6 text-white font-bold text-xs mb:text-base"
      >
        {servicesData[0].serviceBtn}
      </button>
    </div>
  )
}

export default Services
