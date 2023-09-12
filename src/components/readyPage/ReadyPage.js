import React from "react";
import readyBg from "../../images/ready.png";
import Affiliation from "../affiliation/Affiliation";
import FooterPage from "../footerPage/FooterPage";

const ReadyPage = ({ready, affiliation,footer}) => {
  return (
    <div
      // className="bg-contain bg-no-repeat flex flex-col items-center text-white py-4 md:py-10"
      className="bg-cover md:bg-contain bg-no-repeat flex flex-col items-center text-white"
      // className="bg-contain bg-no-repeat flex flex-col items-center text-white"
      style={{
        backgroundImage: `url('${ready[0].readyBgImg.sourceUrl}')`,
      }}
    >
      {/* <h1 className="font-bold text-[12px] sm:text-xl md:text-2xl -mt-2"> */}
      <h1 className="font-bold text-[18px] sm:text-xl md:text-2xl mt-8 md:mt-8 mx-5">
        {ready[0].readyTitle1}
      </h1>
      <small className="text-[15px] sm:text-sm md:text-base my-4 md:my-3 mx-5">
      {ready[0].readyTitle2}
      </small>
      <button className="text-[18px] sm:text-sm md:text-xs p-1 mb-4 md:p-2 md:px-4 text-white mx-3 rounded-full px-4 transition-colors duration-1000 ease-in-out bg-gradient-to-r from-zinc-700 to-teal-500 hover:px-[9px]">
      {ready[0].readyButton}
      </button>
      <Affiliation affiliation={affiliation} />
      <FooterPage footer={footer} />
    </div>
  );
};

export default ReadyPage;