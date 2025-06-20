import "./services.css";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaBriefcase,
  FaBlog,
  FaUserTie,
  FaDatabase,
} from "react-icons/fa";

import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { PiMicrosoftWordLogoBold } from "react-icons/pi";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Landing Pages",
    description:
      "Designing high-converting, mobile-responsive landing pages that increase leads and boost online engagement.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Ecommerce Websites",
    description:
      "Building secure, user-friendly online stores with smooth checkout and order management for better sales.",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Websites",
    description:
      "Crafting professional business websites that establish credibility and enhance your digital presence.",
  },
  {
    icon: <FaBlog />,
    title: "Blog Websites",
    description:
      "Creating SEO-optimized, clean, and engaging blogs tailored for content creators and storytellers.",
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Websites",
    description:
      "Developing stylish, responsive portfolios to showcase your skills and projects effectively.",
  },
  {
    icon: <PiMicrosoftWordLogoBold />,
    title: "MS Word Services",
    description:
      "Expert formatting, document creation, and custom templates for business or academic use.",
  },
  {
    icon: <PiMicrosoftPowerpointLogo />,
    title: "MS PowerPoint Services",
    description:
      "Designing professional presentations that are visually striking and content-rich.",
  },
  {
    icon: <PiMicrosoftExcelLogoBold />,
    title: "MS Excel Services",
    description:
      "Offering advanced Excel solutions including formulas, dashboards, and data automation.",
  },
  {
    icon: <FaDatabase />,
    title: "MS Access Services",
    description:
      "Creating efficient MS Access databases with custom queries, forms, and data management.",
  },
];

export const Services = () => {
 
  return (
    <section id="services" className="mt-[30%] md:mt-[10%]">
      <h1 className="text-4xl text-purple-600 font-extrabold text-center mb-[10%] md:mb-[5%]">
        Our Services
      </h1>

      <div
        className="services-container grid grid-cols-1 sm:grid-cols-2 place-items-center  gap-3"
        
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white flex shadow-2xl flex-col box rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 text-center"
 
          >
            <div className="icon mb-4 text-purple-700 text-4xl">
              {service.icon}
            </div>
            <h3 className="text-gray-700 font-semibold text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
