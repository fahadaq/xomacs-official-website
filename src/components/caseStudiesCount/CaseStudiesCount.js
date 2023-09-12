import React from "react"

const CaseStudiesCount = ({ caseStudiesCount }) => {
  const Projects = caseStudiesCount[0].caseStudiesRight.map((pO, i) => {
    return (
      <span
        // className="grid sm:grid-cols-1 md:grid-cols-2 divide-y divide-x sm:divide-y-0 sm:divide-x-0 md:items-center text-center"
        className="grid sm:grid-cols-1 md:grid-cols-2 divide-y divide-x md:items-center text-center"
        // className="grid sm:grid-cols-1 md:grid-cols-2 md:items-center text-center"
      >
        {pO.caseStudiesCountRight.map((v, idx) => (
          <div className="py-5">
            {/* <div className={`py-5 border-b-2 border-l-2 border-l-white`}> */}
            {/* <div className={`py-5 ${idx!==1 ? '' : 'sm:border-b-2 sm:border-l-2'} ${idx!==2 ? '' : 'sm:border-t-2 sm:border-r-2'}`}> */}
            {/* <div className={`py-5 ${(i%2===0 && idx%3===0) ? '' : 'border-b-2'}`}> */}
            {/* <div className={`py-5 ${(i%2===0 && idx%3===0) ? '' : 'border-b-2'}`}> */}
            {/* <div className={`py-5 ${(i%2===0 && idx%3===0) && 'border-t-2'}`}> */}
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
      {/* {Projects} */}
      <div className="mt-5 md:mt-0">
        <div className="grid grid-cols-2 gap-0.5 bg-zinc-100">
          <div className="p-3 flex flex-col items-center bg-white">
            <h1 className="font-bold text-3xl" >
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[0]
                  .useCaseRightCount
              }
            </h1>
            <small>
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[0]
                  .useCaseRightCountTitle
              }
            </small>
          </div>
          <div className="p-3 flex flex-col items-center bg-white">
            <h1 className="font-bold text-3xl" >
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[1]
                  .useCaseRightCount
              }
            </h1>
            <small>
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[1]
                  .useCaseRightCountTitle
              }
            </small>
          </div>
          <div className="p-3 flex flex-col items-center bg-white">
            <h1 className="font-bold text-3xl" >
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[2]
                  .useCaseRightCount
              }
            </h1>
            <small>
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[2]
                  .useCaseRightCountTitle
              }
            </small>
          </div>
          <div className="p-3 flex flex-col items-center bg-white">
            <h1 className="font-bold text-3xl" >
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[3]
                  .useCaseRightCount
              }
            </h1>
            <small>
              {
                caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[3]
                  .useCaseRightCountTitle
              }
            </small>
          </div>
        </div>
      </div>
      {console.log(
        "caseStudiesCount[0].caseStudiesRight",
        caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[0]
          .useCaseRightCount
      )}
      {console.log(
        "caseStudiesCount[0].caseStudiesRight",
        caseStudiesCount[0].caseStudiesRight[0].caseStudiesCountRight[0]
          .useCaseRightCountTitle
      )}
    </div>
  )
}

export default CaseStudiesCount
