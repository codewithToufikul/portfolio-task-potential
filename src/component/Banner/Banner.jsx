import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import bannerImage from "../../assets/bannnerImage.png";

const Banner = () => {
  return (
    <div className="flex justify-between mt-20">
      <div className="w-1/2 space-y-5">
        <h3 className="text-2xl font-semibold">Hi I am</h3>
        <h2 className="text-themeColor text-3xl font-semibold">
          Muhammad Umair{" "}
        </h2>
        <h1 className="text-[100px] font-bold leading-none">
          UI & UX <br /> <span className="ml-56">Designer</span>
        </h1>

        <p className="text-[21px] font-normal pt-5">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div>
          <a className="bg-[#FD6F00] px-8 py-2 text-xl font-normal text-white cursor-pointer rounded-md">
            Hire Me
          </a>
        </div>
      </div>
      <div className="relative w-[465px] mt-20 ">
        <div className="w-full h-[440px] inset-0 rounded-full bg-gradient-to-b from-gray-500 to-[#FD6F00] p-2 bg-clip-border">
          <div className="w-full h-full rounded-full bg-white">
            {/* Your inner content goes here */}
          </div>
        </div>

        <img
          src={bannerImage}
          alt="Banner"
          className=" z-20 absolute top-[-97px] object-cover rounded-b-full border-b-[1px]"
        />
        <div className="bg-[#FD6F0099] w-[250px] h-[60px] absolute top-[-10px] z-50 left-[95px]"></div>
        <div className=" flex justify-center gap-3 mt-10">
      <p className=" text-3xl cursor-pointer"><FaFacebook /></p>
      <p className=" text-3xl cursor-pointer"><FaTwitter /></p>
      <p className=" text-3xl cursor-pointer"><FaInstagram /></p>
      <p className=" text-3xl cursor-pointer"><FaLinkedin /></p>
      </div>
      </div>
    </div>
  );
};

export default Banner;
