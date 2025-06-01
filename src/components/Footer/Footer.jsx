 
import {  FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center mt-[20%]" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Brief About SNR */}
        <p className="mb-4 text-sm md:text-base font-light">
          SNR is a dedicated team providing expert full-stack web development and MS Office solutions, committed to delivering quality and innovation.
        </p>

        {/* Contact Info */}
        <p className="mb-4 text-sm md:text-base">
          Contact:{" "}
          <a href="mailto:saadbkhalid666@gmail.com" className="text-purple-500 hover:underline">
            saadbkhalid666@gmail.com
          </a>{" "}
          |{" "}
          <a href="tel:+923004196455" className="text-purple-500 hover:underline">
            0300 4196455
          </a>{" "}
          |{" "}
          <a href="tel:+923184069943" className="text-purple-500 hover:underline">
            0318 4069943
          </a>
        </p>

        {/* Social Media Neon Icons */}
        <div className="flex justify-center gap-6 mb-6 text-xl">
          
          <a
            href="https://x.com/saadrajpoot666"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-[#1DA1F2] hover:text-[#66C0F4] drop-shadow-[0_0_10px_#1DA1F2]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/saadbinkhalid666"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[#0A66C2] hover:text-[#4F8BD6] drop-shadow-[0_0_10px_#0A66C2]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/sagit_saad"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-[#E1306C] hover:text-[#FF5B94] drop-shadow-[0_0_10px_#E1306C]"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright & Powered By */}
        <p className="text-xs md:text-sm text-gray-500">
          © 2025 SNR. All rights reserved. | Powered by <span className="text-purple-600 font-semibold"><a href="https://sbkdev.vercel.app/">Saad.Dev</a></span>
        </p>
      </div>
    </footer>
  );
};
