import React from "react"
import logo from "../../images/Group.png"
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa"

const FooterPage = ({ footer }) => {
  let iconsObj = [
    {
      icon: <FaPhone className="transform -scale-x-100" />,
    },
    {
      icon: <FaEnvelope className="transform -scale-x-100" />,
    },
    {
      icon: <FaMapMarkerAlt className="transform -scale-x-100" />,
    },
  ]
  return (
    <div
      className="w-full flex flex-col bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('${footer[0].footerBgImg.sourceUrl}')`,
      }}
    >
      <div className="flex-1 md:flex md:justify-center md:items-center">
        <div className="md:max-w-screen-lg md:flex-row flex-col md:w-full md:flex md:mx-auto md:my-10 md:p-10 mx-5">
          {/* Left Section */}
          <div
            className="md:w-1/2 md:flex md:flex-col md:items-start"
            style={{
              marginBottom: "1rem",
            }}
          >
            <img src={logo} className="mt-3 h-10 sm:h-14" alt="Logo" />
            {/* <p className="text-xs md:text-base mt-2 mb-4 md:w-3/4"> */}
            <p className="text-xs md:text-base mt-2 mb-4 md:w-56 md:leading-8">
              {footer[0].footer1st[0].footerLogoText}
            </p>
            {/* Social Media Icons */}
            <div className="flex text-sm md:text-base space-x-4 cursor-pointer">
              <FaFacebookF className="border rounded-full text-4xl p-2" />
              <FaTwitter className="border rounded-full text-4xl p-2" />
              <FaLinkedinIn className="border rounded-full text-4xl p-2" />
            </div>
          </div>
          {/* Right Section */}
          <div
            className="md:w-1/2 md:grid md:grid-cols-3 md:gap-x-10"
            style={{
              display: "grid",
              gap: "1rem",
            }}
          >
            <div className="text-xs md:text-base space-y-2 md:text-start">
              <h1 className="text-sm md:text-lg">
                {footer[0].footer2nd[0].footer2ndTitle}
              </h1>
              {/* Links */}
              <span className="cursor-pointer flex flex-col space-y-2">
                {footer[0].footer2nd[0].footer2ndLinks.map(f2l => (
                  <small>{f2l.links}</small>
                ))}
              </span>
              {/* Links end */}
            </div>
            <div className="text-xs md:text-base space-y-2 md:text-start">
              <h1 className="text-sm md:text-lg">
                {footer[0].footer3rd[0].footer3rdTitle}
              </h1>
              {/* Services */}
              <span className="cursor-pointer flex flex-col space-y-2">
                {footer[0].footer3rd[0].footer3rdBtns.map(f3b => (
                  <small>{f3b.btns}</small>
                ))}
              </span>
              {/* Services end */}
            </div>
            <div className="text-xs md:text-base space-y-2 md:text-start">
              <h1 className="text-sm md:text-lg">
                {footer[0].footer4th[0].footer4thTitle}
              </h1>
              {/* Contact */}
              <span className="flex flex-col ">
                {footer[0].footer4th[0].footer4thBtnsfooter3rdBtns.map(
                  (f4bf3b, ind) => (
                    <small className="flex items-center space-x-2">
                      <span>
                        {iconsObj[ind].icon}
                      </span>
                      <span>
                        {f4bf3b.info}
                      </span>
                    </small>
                  )
                )}
               </span>
              {/* Contact ends */}
            </div>
          </div>
        </div>
      </div>
      <small
        className="text-xs md:text-sm text-center py-5 border-t border-slate-700 mt-5 md:mt-0 w-40 md:w-96 m-auto"
      >
        {footer[0].footerBarText}
      </small>
    </div>
  )
}

export default FooterPage
