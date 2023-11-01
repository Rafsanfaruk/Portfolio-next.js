import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-3">
          <a href="https://www.facebook.com/Rafsan0/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/md-omar-faruk-610239280/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a href="https://github.com/Rafsanfaruk" target="_blank" rel="noopener noreferrer">
            <FaGithub className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a href="mailto:mdomarfaruk2084@gmail.com">
            <BiLogoGmail className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
        </div>
        <p className="text-sm text-center">
          Copyright ©2023 All Rights Reserved
          <br />
          Designed by <span className="font-bold text-pink-500">Md Omar Faruk</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
