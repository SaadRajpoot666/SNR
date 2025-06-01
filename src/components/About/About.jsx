import { motion, } from "framer-motion";
import {useInView} from "react-intersection-observer"
export const About = () => {
    const [ref,inView] = useInView({
        triggerOnce:true,
        threshold:0.3
    })

  return (
    <section
      id="about"
      ref={ref}
      className="flex justify-center items-center text-center mt-[10%] ml-5 mr-5  border-4 border-purple-800 px-16 py-14 rounded-4xl"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="content-container"
      >
        <h1 className="text-4xl mb-10 uppercase text-purple-800 font-bold font-sans">
          {" "}
          💼 About Us
        </h1>
         <p className="text-lg text-gray-700 leading-relaxed">
  We are <span className="text-purple-700 font-semibold">SNR</span> —
  short for{" "}
  <span className="text-purple-700 font-semibold">Saad ‘n’ Raza</span> —
  a dynamic duo of digital craftsmen specializing in{" "}
  <strong>full-stack web development</strong> and expert{" "}
  <strong>MS Office solutions</strong>. With years of experience, we
  deliver innovative <strong>digital solutions for businesses</strong>{" "}
  that empower growth and enhance operational efficiency.
  <br />
  <br />
  I’m{" "}
  <span className="text-purple-700 font-semibold">Saad Bin Khalid</span>,
  a passionate and skilled{" "}
  <strong>
    <span className="text-purple-700 font-semibold">MERN stack developer</span>
  </strong>{" "}
  with expertise in{" "}
  <strong>
    <span className="text-purple-700 font-semibold">React.js</span>
  </strong>
  ,{" "}
  <strong>
    <span className="text-purple-700 font-semibold">Node.js</span>
  </strong>
  ,{" "}
  <strong>
    <span className="text-purple-700 font-semibold">Express</span>
  </strong>
  ,{" "}
  <strong>
    <span className="text-purple-700 font-semibold">MongoDB</span>
  </strong>
  , and{" "}
  <strong>
    <span className="text-purple-700 font-semibold">Django</span>
  </strong>
  . I build sleek, <strong>responsive websites</strong> and powerful web
  applications designed to <strong>perform flawlessly</strong> across
  devices and platforms, ensuring the best user experience and high
  performance.
  <br />
  <br />
  My partner,{" "}
  <span className="text-purple-700 font-semibold">Raza</span>, is a
  dedicated{" "}
  <strong>
    <span className="text-purple-700 font-semibold">MS Office expert</span>
  </strong>{" "}
  with advanced skills in{" "}
  <strong>
    <span className="text-purple-700 font-semibold">Excel</span>
  </strong>
  ,{" "}
  <strong>
    <span className="text-purple-700 font-semibold">Word</span>
  </strong>
  ,{" "}
  <strong>
    <span className="text-purple-700 font-semibold">PowerPoint</span>
  </strong>
  , and{" "}
  <strong>
    <span className="text-purple-700 font-semibold">MS Access</span>
  </strong>
  . He crafts efficient business workflows, professional documents, and
  impactful presentations that drive productivity and clarity.
  <br />
  <br />
  At <span className="text-purple-700 font-semibold">SNR</span>, we
  believe in{" "}
  <strong>
    <span className="text-purple-700 font-semibold">
      collaborating to motivate
    </span>
  </strong>{" "}
  — combining our technical expertise to deliver tailor-made digital
  solutions that simplify business processes and help you achieve your
  goals.
  <br />
  <br />
  Whether you need a <strong>custom web application</strong>, a{" "}
  <strong>business website</strong>, or{" "}
  <strong>professional office automation</strong>,{" "}
  <span className="text-purple-700 font-semibold">SNR</span> is your
  trusted partner for digital success.
  <br />
  <br />
  <span className="italic text-purple-700 font-semibold">
    “We don’t just work together — we grow together, and we help you
    grow too.”
  </span>
</p>

      </motion.div>
    </section>
  );
};
