import React from "react"
import img1 from "../../images/image_58.png"
import img2 from "../../images/image_59.png"
import img3 from "../../images/image_60.png"
import img4 from "../../images/image_61.png"
import { FaArrowRight } from "react-icons/fa"
// img1

const PostsArticles = ({postsArticles}) => {
  console.log('postsArtliclesss', postsArticles)
  const imagesObj = [img1, img2, img3, img4]

  const Images = postsArticles[0].postsArticles.map(iO => {
    return (
      <div className="flex justify-center relative mb-[150px]">
        <img className="w-[80%] rounded-lg" src={iO.postsArticlesImg.sourceUrl} />
        <span className="absolute justify-center backdrop-blur -bottom-[20%] md:-bottom-[40%] md:-right-2 p-5 text-xs w-[90%] rounded-lg shadow drop-shadow hover:bg-blue-950 hover:text-white cursor-pointer duration-500">
          <h1 className="font-bold text-center text-[15px]">{iO.postsArticleImgTitle}</h1>
          <p className="-mx-2 py-3">{iO.postsArticlesImgDescription}</p>
          <button className="items-center text-center w-full font-bold mx-auto flex justify-center">{iO.postsArticlesImgBtn} &nbsp; <FaArrowRight/></button>
        </span>
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center mt-10">
      <small className="uppercase text-[10px] font-bold text-teal-500">{postsArticles[0].postsArticlesText1}</small>
      <h1 className="font-bold text-3xl mb-5">{postsArticles[0].postsArticlesText2}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 md:gap-5 sm:gap-2 mx-5">
      {Images}
      </div>
    </div>
  )
}

export default PostsArticles
