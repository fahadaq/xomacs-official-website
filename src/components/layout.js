import React from 'react'

const Layout = () => {
  return (
    <div>Layout</div>
  )
}

export default Layout



// import * as React from "react"
// import Navbar from "./navbar/Navbar"
// import { useStaticQuery, graphql } from "gatsby"
// import CaseStudiesCount from "./caseStudiesCount/CaseStudiesCount"
// import PostsAndArticles from "./postsAndArticles/PostsAndArticles"
// import Technologies from "./technologies/Technologies"
// import CustomerFeedback from "./customerFeedback/CustomerFeedback"
// import ReadyPage from "./readyPage/ReadyPage"
// import Home from "./home/Home"
// import About from "./about/About"
// import Services from "./services/services"
// import CaseStudies from "./caseStudies/CaseStudies"
// import GatsbyImageExample from "./gatsbyImageExample/GatsbyImageExample"

// // const Layout = ({ children }) => {
// const Layout = () => {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allWpPage {
//         nodes {
//           pageBuilders {
//             about {
//               ... on WpPage_Pagebuilders_About_AboutStuffs {
//                 aboutLeftSubText
//                 aboutRightText1
//                 aboutRightText2
//                 aboutRightText3
//                 aboutRightText4
//                 aboutBg {
//                   altText
//                   sourceUrl
//                 }
//                 aboutLeft {
//                   altText
//                   sourceUrl
//                 }
//                 aboutLeftImg {
//                   altText
//                   sourceUrl
//                 }
//               }
//             }
//             affiliation {
//               ... on WpPage_Pagebuilders_Affiliation_AffiliationStuffs {
//                 affiliationImage {
//                   affiliationImg {
//                     altText
//                     sourceUrl
//                   }
//                 }
//               }
//             }
//             caseStudies {
//               ... on WpPage_Pagebuilders_CaseStudies_CaseStudiesStuff {
//                 caseStudiesButton
//                 caseStudiesText1
//                 caseStudiesBgImg {
//                   altText
//                   sourceUrl
//                 }
//                 caseStudiesImageCard {
//                   caseStudiesCardBtn
//                   caseStudiesCardText2
//                   caseStudiesCardTitle
//                   caseStudiesCardImage {
//                     altText
//                     sourceUrl
//                   }
//                 }
//                 caseStudiesNavbar {
//                   useCaseNavbarText
//                 }
//                 caseStudiesText2
//               }
//             }
//             caseStudiesCount {
//               ... on WpPage_Pagebuilders_CaseStudiesCount_CaseStudiesCountStuff {
//                 caseStudiesCountLeft {
//                   ... on WpPage_Pagebuilders_CaseStudiesCount_CaseStudiesCountStuff_CaseStudiesCountLeft_CaseStudiesCountLeftStuffs {
//                     caseStudiesCountLeftText1
//                     caseStudiesCountLeftText2
//                   }
//                 }
//                 caseStudiesRight {
//                   ... on WpPage_Pagebuilders_CaseStudiesCount_CaseStudiesCountStuff_CaseStudiesRight_CountStudiesRightStuffs {
//                     caseStudiesCountRight {
//                       useCaseRightCount
//                       useCaseRightCountTitle
//                     }
//                   }
//                 }
//               }
//             }
//             footer {
//               ... on WpPage_Pagebuilders_Footer_FooterStuffs {
//                 footerBarText
//                 footerBgImg {
//                   altText
//                   sourceUrl
//                 }
//                 footer1st {
//                   ... on WpPage_Pagebuilders_Footer_FooterStuffs_Footer1st_Footer1stStuffs {
//                     footerLogoText
//                     footerLogo {
//                       altText
//                       sourceUrl
//                     }
//                   }
//                 }
//                 footer2nd {
//                   ... on WpPage_Pagebuilders_Footer_FooterStuffs_Footer2nd_Footer2ndStuffs {
//                     footer2ndTitle
//                     footer2ndLinks {
//                       links
//                     }
//                   }
//                 }
//                 footer3rd {
//                   ... on WpPage_Pagebuilders_Footer_FooterStuffs_Footer3rd_Footer3rdStuffs {
//                     footer3rdTitle
//                     footer3rdBtns {
//                       btns
//                       fieldGroupName
//                     }
//                   }
//                 }
//                 footer4th {
//                   ... on WpPage_Pagebuilders_Footer_FooterStuffs_Footer4th_Footer4thStuffs {
//                     footer4thTitle
//                     footer4thBtnsfooter3rdBtns {
//                       info
//                     }
//                   }
//                 }
//               }
//             }
//             hero {
//               ... on WpPage_Pagebuilders_Hero_HeroStuffs {
//                 heroButton
//                 heroBgImg {
//                   altText
//                   sourceUrl
//                 }
//                 heroFrontImg {
//                   altText
//                   sourceUrl
//                 }
//                 heroTitle1
//                 heroTitle2
//               }
//             }
//             navbar {
//               ... on WpPage_Pagebuilders_Navbar_NavbarStuffs {
//                 navbarSideButton
//                 navbarLogo {
//                   altText
//                   sourceUrl
//                 }
//                 navbarMenu {
//                   navbarMenuButton
//                 }
//               }
//             }
//             postsArticles {
//               ... on WpPage_Pagebuilders_PostsArticles_PostsArticlesStuffs {
//                 postsArticlesText1
//                 postsArticles {
//                   postsArticleImgTitle
//                   postsArticlesImgBtn
//                   postsArticlesImgDescription
//                   postsArticlesImg {
//                     altText
//                     sourceUrl
//                   }
//                 }
//                 postsArticlesText2
//               }
//             }
//             ready {
//               ... on WpPage_Pagebuilders_Ready_ReadyStuffs {
//                 readyButton
//                 readyTitle1
//                 readyTitle2
//                 readyBgImg {
//                   altText
//                   sourceUrl
//                 }
//               }
//             }
//             services {
//               ... on WpPage_Pagebuilders_Services_ServicesStuff {
//                 serviceBtn
//                 serviceText1
//                 serviceText2
//                 servicesCard {
//                   serviceCardDescription
//                   serviceCardTitle
//                   service {
//                     altText
//                     sourceUrl
//                   }
//                 }
//               }
//             }
//             technologies {
//               ... on WpPage_Pagebuilders_Technologies_TechnologiesStuff {
//                 technologies
//                 technologiesTitle2
//                 technologiesTitle
//                 technologiesBtnsRepeatator {
//                   technologiesBtn
//                 }
//                 technologiesImgRepeatators {
//                   technologiesImg {
//                     altText
//                     sourceUrl
//                   }
//                 }
//               }
//             }
//             testimonials {
//               ... on WpPage_Pagebuilders_Testimonials_TestimonialsStuffs {
//                 testimonialsText1
//                 testimonialsCard {
//                   testimonialsCardDescription
//                   testimonialsLogoImg {
//                     altText
//                     sourceUrl
//                   }
//                   testimonialsLogoSubtitle
//                   testimonialsLogoTitle
//                 }
//                 testimonialsTitle
//               }
//             }
//             colorsStandard {
//               colorsStandard
//               colorsStandardTitle
//             }
//           }
//           title
//         }
//       }
//     }
//   `)

//   const { allWpPage } = data
  
//   const {
//     allWpPage: { nodes },
//   } = data
  
//   const navbarStuffs = nodes.filter(nd => nd.title === "Navbar")
  
//   const { pageBuilders: navbarPage } = navbarStuffs[0]

//   const ColorStandardStuffs = nodes.filter(nd => nd.title === "Colors Standard")

//   const HomeStuffs = nodes.filter(nd => nd.title === "Hero")

//   const { pageBuilders: {hero:homeData} } = HomeStuffs[0]

//   const AboutStuffs = nodes.filter(nd => nd.title === "About")

//   const { pageBuilders: { about } } = AboutStuffs[0]

//   const ServicesStuffs = nodes.filter(nd => nd.title === "Services")

//   const { pageBuilders: { services } } = ServicesStuffs[0]

//   const CaseStudiesStuffs = nodes.filter(nd => nd.title === "Case Studies")

//   const { pageBuilders: { caseStudies } } = CaseStudiesStuffs[0]

//   const CaseStudiesCountStuffs = nodes.filter(nd => nd.title === "Case Studies Count")

//   const { pageBuilders: { caseStudiesCount } } = CaseStudiesCountStuffs[0]

//   const PostsArticlesStuffs = nodes.filter(nd => nd.title === "Posts & Articles")

//   const { pageBuilders: {postsArticles} } = PostsArticlesStuffs[0]

//   const TechnologiesStuffs = nodes.filter(nd => nd.title === "Technologies")

//   const { pageBuilders: {technologies} } = TechnologiesStuffs[0]

//   const CustomerFeedbackStuffs = nodes.filter(nd => nd.title === "Testimonials")

//   const { pageBuilders: {testimonials} } = CustomerFeedbackStuffs[0]

//   const ReadyStuffs = nodes.filter(nd => nd.title === "Ready")

//   const { pageBuilders: {ready} } = ReadyStuffs[0]

//   const AffiliationStuffs = nodes.filter(nd => nd.title === "Affiliation")

//   const { pageBuilders: {affiliation} } = AffiliationStuffs[0]

//   const FooterStuffs = nodes.filter(nd => nd.title === "Footer")

//   const { pageBuilders: {footer} } = FooterStuffs[0]

//   console.log('footer', footer)
  
//   const {
//     pageBuilders: { colorsStandard },
//   } = ColorStandardStuffs[0]
//   const { navbar } = navbarPage

//   return (
//     <>
//       <div className="relative font-roboto overflow-hidden">
//         <Navbar ClrStandard={colorsStandard} NavbarData={navbar} />
//         <Home homeData={homeData} ClrStandard={colorsStandard}/>
//         <About aboutData={about}/>
//         <Services servicesData={services} ClrStandard={colorsStandard}/>
//         <CaseStudies caseStudiesData={caseStudies} ClrStandard={colorsStandard}/>
//         <CaseStudiesCount caseStudiesCount={caseStudiesCount} />
//         <PostsAndArticles postsArticles={postsArticles} />
//         <Technologies technologies={technologies} testimonials={testimonials} />
//         <ReadyPage ready={ready} affiliation={affiliation} footer={footer}/>
//         <GatsbyImageExample navbar={navbar[0]}/>
//         {/* <main>{children}</main> */}
//       </div>
//     </>
//   )
// }

// export default Layout
