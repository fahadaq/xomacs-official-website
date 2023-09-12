import React, { useState } from "react"
import "../../styles/styles.scss"
import { css } from "@emotion/react"
import { FaBars, FaXbox, FaXing } from "react-icons/fa"
import { HiOutlineBarsArrowDown, HiOutlineBarsArrowUp } from "heroicons-react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Img from "gatsby-image"

const Navbar = ({ ClrStandard, NavbarData }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Colors

  const clr0th = ClrStandard[0].colorsStandard.toString()
  const clr1st = ClrStandard[1].colorsStandard.toString()
  const clr2nd = ClrStandard[2].colorsStandard.toString()

  // Navbar

  const { navbarSideButton } = NavbarData[0]
  const { navbarMenu } = NavbarData[0]
  const { navbarLogo } = NavbarData[0]

  const NavbarBtns = navbarMenu.map((btn, idx) => (
    <div className="flex items-center mt-2">
      <button
        key={idx}
        className={`my-6 md:my-0 mx-5 pb-3 color-white hover:border-b-4 hover:pt-1 outline-none ease-linear duration-100 ${
          menuOpen
            ? "flex items-center justify-center w-full p-2 m-1 text-black text-xl"
            : "md:flex md:d-flex md:flex-row text-xs"
        } text-white flex flex-row items-center `}
        style={{
          borderColor: clr2nd,
        }}
      >
        {btn.navbarMenuButton}
      </button>
    </div>
  ))

  const rootStyle = {
    "--clr0th": clr0th,
    "--clr1st": clr1st,
    "--clr2nd": clr2nd,
  }

  const image = getImage(navbarLogo.sourceUrl)

  return (
    <div className="w-full fixed top-0 bg-gray-800 bg-opacity-50 backdrop-blur-md z-50">
      {/* <div className="container mx-auto px-4 md:px-10 py-2 flex justify-between items-center"> */}
      <div className="container px-4 md:px-10 py-2 flex justify-between items-center max-w-full ">
        {/* Navbar Logo */}
        <img
          src={navbarLogo.sourceUrl}
          //  className="max-w-full mx-auto md:mx-0"
          className="w-52 mx-auto md:mx-0"
          alt={navbarLogo.altText}
        />
        {/* <Img
           src={navbarLogo.sourceUrl}
           className="max-w-full mx-auto md:mx-0"
           alt={navbarLogo.altText}
         /> */}

        {/* <StaticImage
           src={navbarLogo.sourceUrl}
           className="max-w-full mx-auto md:mx-0"
           alt={navbarLogo.altText}
         /> */}

        {/* <GatsbyImage image={image} /> */}

        {/* Menu Buttons */}
        <div
          className={`md:flex ${
            menuOpen
              ? "absolute right-0 left-0 bottom-0 flex d-flex flex-col items-center text-center"
              : "hidden"
          } flex d-flex md:flex-row justify-center`}
        >
          <span className={`${menuOpen ? 'bg-zinc-500 fixed top-16 left-0 right-0 h-screen' : 'flex'}`}>
            {NavbarBtns}

            {/* "Let's talk" button */}
            {/* <div className="md:mx-0 mx-auto mt-4 md:mt-0"> */}
            <div className="flex items-center justify-center mt-7 md:mt-0">
            {/* <div className="md:mx-auto sm:mx-52 mt-4 md:mt-0 mx-32"> */}
              <div className="gdd rounded-full w-fit" style={rootStyle}>
                <button className="rounded-full bg-black text-white p-3 pb-2 px-8 md:px-4 text-[xl] md:text-[15px] w-fit">
                  {navbarSideButton}
                </button>
              </div>
            </div>
          </span>
        </div>

        {/* Menu Toggle Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaXbox /> : <FaBars />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
