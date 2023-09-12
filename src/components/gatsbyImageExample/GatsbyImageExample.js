// import React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { graphql, useStaticQuery } from "gatsby"

// const GatsbyImageExample = ({ navbar }) => {
//   // Use `getImage` to get the Gatsby Image data
//   const imageSrc = getImage(navbar?.navbarLogo?.localFile.childImageSharp.gatsbyImageData);

// const data = useStaticQuery(graphql`
//   query MyQuery {
//     allWpMediaItem {
//       edges {
//         node {
//           id
//           sourceUrl
//           localFile {
//             childImageSharp {
//               fluid(quality: 10) {
//                 base64
//               }
//             }
//           }
//         }
//       }
//     }
//   }`);

//   return (
//     <div>
//       <h1>Gatsby Image Example</h1>
//       {/* Render the image with Gatsby Image */}
//       {/* {imageSrc && <GatsbyImage image={imageSrc} alt="Your Image" />} */}
//       {console.log('dataaa',data)}
//     </div>
//   );
// };

// export default GatsbyImageExample;




// import React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// const GatsbyImageExample = ({ navbar }) => {
//   const imageSrc = getImage(navbar?.navbarLogo?.sourceUrl)

//   return (
//     <div>
//       <h1>Gatsby Image Example</h1>
//       {/* {imageSrc && <GatsbyImage image={imageSrc} alt="Your Image" />} */}
//       <img src={navbar?.navbarLogo?.sourceUrl}/>
//     </div>
//   )
// }

// export default GatsbyImageExample

// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// const GatsbyImageExample = ({ navbar }) => {
//   const imageSrc = getImage(
//     navbar?.navbarLogo?.localFile?.childImageSharp?.fluid
//   )

//   // let imageSrc = navbar?.navbarLogo?.sourceUrl

//   //   const data = useStaticQuery(graphql`
//   //     query MyQuery {
//   //       allWpMediaItem {
//   //         edges {
//   //           node {
//   //             id
//   //             sourceUrl
//   //             localFile {
//   //               childImageSharp {
//   //                 fluid(maxWidth: 800) {
//   //                   ...GatsbyImageSharpFluid
//   //                 }
//   //               }
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `)

//   //   const data = useStaticQuery(graphql`
//   //     query MyQuery {
//   //       allWpMediaItem {
//   //         edges {
//   //           node {
//   //             id
//   //             sourceUrl
//   //             localFile {
//   //               childImageSharp {
//   //                 fluid(maxWidth: 800) {
//   //                   src
//   //                 }
//   //               }
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `)

//   //   const data = useStaticQuery(graphql`
//   //     query MyQuery {
//   //       allWpMediaItem {
//   //         edges {
//   //           node {
//   //             id
//   //             sourceUrl
//   //             localFile {
//   //               childImageSharp {
//   //                 fluid(maxWidth: 800) {
//   //                   ...GatsbyImageSharpFluid
//   //                 }
//   //               }
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `)

//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allWpMediaItem {
//         edges {
//           node {
//             id
//             sourceUrl
//             localFile {
//               childImageSharp {
//                 fluid(quality: 10) {
//                   base64
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <div>
//       {/* {console.log("navbarr", navbar.navbarLogo)} */}
//       {/* {console.log("navbarr", navbar?.navbarLogo?.sourceUrl)} */}
//       {/* {console.log("gatsby image example data", data)} */}
//       <h1>Gatsby Image Example</h1>
//       {/* <Img fluid={navbar.navbarLogo.sourceUrl} alt="Your Image" /> */}
//       {/* <GatsbyImage image={navbar?.navbarLogo?.sourceUrl} /> */}
//       {/* <Img
//         fluid={{
//           src: imageSrc, // Use the image URL here
//         }}
//         alt="Image Alt Text"
//       /> */}
//       {console.log("imageSrc", imageSrc)}
//       {imageSrc && <GatsbyImage image={imageSrc} alt="Your Image" />}
//       {imageSrc && <Img fluid={imageSrc} alt="Your Image" />}
//     </div>
//   )
// }

// export default GatsbyImageExample
