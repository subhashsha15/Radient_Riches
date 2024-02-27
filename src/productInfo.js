import productImg from "/deal-img.png";
import fourStar from "/4-star.png";
import fourAndHalfStar from "/4.5-star.png";
import fiveStar from "/5-star.png";
// import { IoDiamondSharp } from "react-icons/io5";

const productInfo = [
  {
    id: 1,
    badgeTitle: "Best Choice",
    image: productImg,
    imageTitle: "Builder 1",
    para1_Heading: "WixPro 72-Inch Responsive Website Builder-",
    para1_content: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    para2_content: [
      {
        rating: 9.9,
        title: "Building Responsive"
      },
      {
        rating: 8.9,
        title: "Cool"
      },
    ],
    discountPercent: "",
    additionalFeature: ["Documentation", "Out of Box"],
    ratingNumber: 9.8,
    ratingTitle: "Exceptional",
    ratingImg: fiveStar
  },
  {
    id: 2,
    badgeTitle: "Best Value",
    image: productImg,
    imageTitle: "Builder 2",
    para1_Heading: "SiteCraft 68-Inch Ultimate Web Design Studio-",
    para1_content: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    para2_content: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    discountPercent: "15% Off",
    additionalFeature: ["Easy Use"],
    ratingNumber: 9.5,
    ratingTitle: "Excellent",
    ratingImg: fourAndHalfStar
  },
  {
    id: 3,
    badgeTitle: "",
    image: productImg,
    imageTitle: "Builder 3",
    para1_Heading: "WixPro 72-Inch Responsive Website Builder-",
    para1_content: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    para2_content: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    discountPercent: "",
    additionalFeature: ["Documentation", "Easy Use"],
    ratingNumber: 9.3,
    ratingTitle: "Exceptional",
    ratingImg: fiveStar
  },
  {
    id: 4,
    badgeTitle: "",
    image: productImg,
    imageTitle: "CDK",
    para1_Heading: "CDK Resposive Builder: ",
    para1_content: "An extensive library of widgets and apps, and detailed step-by-step guides",
    para2_content: [
      {
        rating: 9.9,
        title: "Building Responsive"
      },
      {
        rating: 8.9,
        title: "Cool"
      },
      {
        rating: 8.9,
        title: "Docs"
      },
    ],
    discountPercent: "26% Off",
    additionalFeature: ["Documentation", "Easy Use", "Out of Box"],
    ratingNumber: 9.1,
    ratingTitle: "Very Good",
    ratingImg: fourStar
  },
];

export default productInfo;