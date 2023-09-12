import React from "react"

const CaseStudiesCount = ({ caseStudiesCount }) => {

  const Projects = caseStudiesCount[0].caseStudiesRight.map((pO, i) => {
    return (
      <span className="grid sm:grid-cols-1 md:grid-cols-2 divide-y divide-x md:items-center text-center">
        {pO.caseStudiesCountRight.map(v => (
          <div className='py-5'>
            <h1 className="text-4xl font-[600]">{v.useCaseRightCount}</h1>
            <small>{v.useCaseRightCountTitle}</small>
          </div>
        ))}
      </span>
    )
  })

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 md:items-center md:m-5">
      <div className="grid md:grid-rows-2 sm:grid-rows-1 items-center justify-center">
        <div className="flex items-center">
          <h1 className="text-7xl font-bold text-teal-500">
            {caseStudiesCount[0].caseStudiesCountLeft[0].caseStudiesCountLeftText1.slice(
              0,
              2
            )}
          </h1>
          <small className="uppercase w-10 text-[8px] font-bold self-end mb-2">
            {caseStudiesCount[0].caseStudiesCountLeft[0].caseStudiesCountLeftText1.slice(
              2
            )}
          </small>
        </div>
        <div className="font-[600] text-normal">
          <p>
            {caseStudiesCount[0].caseStudiesCountLeft[0].caseStudiesCountLeftText2.slice(
              0,
              20
            )}
          </p>
          <p className="text-gradient">
            {caseStudiesCount[0].caseStudiesCountLeft[0].caseStudiesCountLeftText2.slice(
              20
            )}
          </p>
        </div>
      </div>
        {Projects}
    </div>
  )
}

export default CaseStudiesCount
