import { getAssetPath } from "../utils/assetPath";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: getAssetPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: getAssetPath("/images/concepts.svg") },
  { text: "Designs", imgPath: getAssetPath("/images/designs.svg") },
  { text: "Code", imgPath: getAssetPath("/images/code.svg") },
  { text: "Ideas", imgPath: getAssetPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: getAssetPath("/images/concepts.svg") },
  { text: "Designs", imgPath: getAssetPath("/images/designs.svg") },
  { text: "Code", imgPath: getAssetPath("/images/code.svg") },
];

const counterItems = [
  // { value: 15, suffix: "+", label: "Years of Experience" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 3, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
     imgPath: getAssetPath("/images/logos/company-logo-1.png"),
   },
   {
    imgPath: getAssetPath("/images/logos/company-logo-2.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-3.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-4.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-5.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-6.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-7.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-8.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-9.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-10.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-11.png"),
  },
];

const abilities = [
  {
    imgPath: getAssetPath("/images/Brandghar.png"),
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: getAssetPath("/images/chat.png"),
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: getAssetPath("/images/time.png"),
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: getAssetPath("/images/logos/react.png"),
  },
  {
    name: "Android Developer",
    imgPath: getAssetPath("/images/logos/android.svg"),
  },
  {
    name: "Backend Developer",
    imgPath: getAssetPath("/images/logos/node.png"),
  },
  {
    name: "Interactive Developer",
    imgPath: getAssetPath("/images/logos/three.png"),
  },
  {
    name: "Project Manager",
    imgPath: getAssetPath("/images/logos/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: getAssetPath("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Android Developer",
    modelPath: getAssetPath("/models/android_logo.glb"),
    scale: 1.5,
    rotation: [0, 0, 0],
    position: [0, 3, 5],
  },
  {
    name: "Backend Developer",
    modelPath: getAssetPath("/models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: getAssetPath("/models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: getAssetPath("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Bhavika Patil played a key role in developing both the Android application and website, demonstrating strong technical expertise and a clear understanding of business requirements. She delivered seamless, responsive solutions with high ownership, timely execution, and effective communication. Her problem-solving skills and dedication made the development process smooth and efficient.",
    imgPath: getAssetPath("/images/exp1.png"),
    logoPath: getAssetPath("/images/exp1.png"),
    title: "Android Developer",
    date: "July 2025 - Present",
    responsibilities: [
      "Developed the Brandghar eCommerce, Admin, and Delivery Man apps using Flutter and Laravel.",
      "Integrated Firebase for authentication, real-time notifications, and analytics.",
      "Implemented multi-vendor, order management, features for a smooth shopping experience.",
    ],
  },
  // {
  //   review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
  //   imgPath: "/images/exp2.png",
  //   logoPath: "/images/logo2.png",
  //   title: "Full Stack Developer",
  //   date: "June 2020 - December 2023",
  //   responsibilities: [
  //     "Led the development of Docker's web applications, focusing on scalability.",
  //     "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
  //     "Contributed to open-source projects that were used with the Docker ecosystem.",
  //   ],
  // },
  // {
  //   review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: getAssetPath("/images/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: getAssetPath("/images/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: getAssetPath("/images/logo3.png"),
  },
];

 const testimonials = [
   {
    name: "Saurav Chaudhary",
    mentions: "@sauravchaudhary",
    review:
      "Bhavika demonstrated strong technical skills, clear understanding of requirements, and a high level of ownership while working on both mobile and web applications. Her timely delivery, proactive communication, and problem-solving approach ensured high-quality outcomes.",
    //imgPath: getAssetPath("/images/client1.png"),
  },
//   {
//     name: "Wade Warren",
//     mentions: "@wadewarren",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//     imgPath: "/images/client3.png",
//   },
//   {
//     name: "Guy Hawkins",
//     mentions: "@guyhawkins",
//     review:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     imgPath: "/images/client2.png",
//   },
//   {
//     name: "Marvin McKinney",
//     mentions: "@marvinmckinney",
//     review:
//       "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
//     imgPath: "/images/client5.png",
//   },
//   {
//     name: "Floyd Miles",
//     mentions: "@floydmiles",
//     review:
//       "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
//     imgPath: "/images/client4.png",
//   },
//   {
//     name: "Albert Flores",
//     mentions: "@albertflores",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//     imgPath: "/images/client6.png",
//   },
 ];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    imgPath: getAssetPath("/images/linkedin.png"),
    link:" https://www.linkedin.com/in/bhavika-patil-42280b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
