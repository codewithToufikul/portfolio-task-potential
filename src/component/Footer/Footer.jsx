import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import navLogo from '../../assets/navlogo.png'

const Footer = () => {
  return (
    <div className=" mt-28">
      <footer className="footer footer-center bg-base-200 text-base-content rounded pt-10">
        <nav className="">
        <div className=" flex items-center my-5">
            <div className=" w-16 bg-[#FD6F00] rounded-full py-3">
              <img src={navLogo} alt="" />
            </div>
            <p
              style={{ fontFamily: "Montserrat, sans-serif !important" }}
              className="btn btn-ghost tracking-wider text-4xl"
            >
              M<span className="ml-[-8px] font-light text-[#545454]">umair</span>
            </p>
          </div>
          <ul className="menu menu-horizontal px-1">
            
            <li className=" cursor-pointer font-semibold text-lg mr-7">Home</li>
            <li className=" cursor-pointer font-semibold text-lg mr-7">
              About Me
            </li>
            <li className=" cursor-pointer font-semibold text-lg mr-7">
              Services
            </li>
            <li className=" cursor-pointer font-semibold text-lg mr-7">
              Projects
            </li>
            <li className=" cursor-pointer font-semibold text-lg mr-7">
              Testimonials
            </li>
            <li className=" cursor-pointer font-semibold text-lg mr-7">
              Contact
            </li>
          </ul>
        </nav>
        <nav>
          <div className=" flex justify-center gap-3">
            <p className=" text-3xl cursor-pointer">
              <FaFacebook />
            </p>
            <p className=" text-3xl cursor-pointer">
              <FaTwitter />
            </p>
            <p className=" text-3xl cursor-pointer">
              <FaInstagram />
            </p>
            <p className=" text-3xl cursor-pointer">
              <FaLinkedin />
            </p>
          </div>
        </nav>
        <aside className=" bg-[#545454] w-full py-5">
          <p className=" text-lg font-normal text-white">
          © 2023 <span className=" font-bold text-themeColor">Mumair</span> All Rights Reserved , Inc.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
