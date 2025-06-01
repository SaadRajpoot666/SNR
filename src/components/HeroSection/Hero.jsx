import { motion } from "framer-motion";
import img from "../../assets/images/header-bg.jpg";
export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      id="home"
      className="bg-cover bg-center h-screen flex items-center relative justify-center  contrast-120  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0   backdrop-blur-[5px] brightness-50 "></div>

       <motion.div
  initial={{ x: -300 }}
  animate={{ x: 0 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="container z-50 bg-white px-5 py-10 border-4 md:w-[60%] mx-10 border-purple-600 rounded-tl-[50px] rounded-tr-xl rounded-bl-xl rounded-br-[50px] text-center"
>
  <h1 className="font-bold font-serif text-purple-800 md:text-3xl">
    <span className="text-purple-600 text-4xl font-bold">“</span>
    Modern Websites & Expert Microsoft Office Solutions for Businesses
    <span className="text-purple-600 text-4xl font-bold">”</span>
  </h1>
  <p className="text-xl px-6 mt-4">
    SNR delivers expert web development and Microsoft Office solutions with
    high-performance, responsive designs. We help businesses streamline
    operations and boost productivity with custom, reliable services.
  </p>
</motion.div>

    </motion.div>
  );
};
