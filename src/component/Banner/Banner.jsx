import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import bannerImage from "../../assets/bannnerImage.png";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between mt-10 md:mt-20">
      <div className="md:w-1/2 space-y-3 md:space-y-5">
        <h3 className="md:text-2xl text-xl font-semibold">Hi I am</h3>
        <h2 className="text-themeColor text-2xl md:text-3xl font-semibold">
          Muhammad Umair{" "}
        </h2>
        <h1 className="lg:text-[100px] md:text-[50px] text-[50px] font-bold leading-none">
          UI & UX <br /> <span className="lg:ml-56">Designer</span>
        </h1>

        <p className=" text-lg mg:text-[21px] font-normal pt-3 md:pt-5">
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
      <div className="relative lg:w-[465px] md:w-[400px] w-[350px]  mt-20 ">
        <div className="w-full h-[350px] lg:h-[440px] inset-0 rounded-full bg-gradient-to-b from-gray-500 to-[#FD6F00] p-2 bg-clip-border">
          <div className="w-full h-full rounded-full bg-white">
            {/* Your inner content goes here */}
          </div>
        </div>

        <img
          src={bannerImage}
          alt="Banner"
          className=" z-20 absolute lg:top-[-97px] top-[-56px] md:top-[-100px] object-cover rounded-b-full border-b-[1px]"
        />
        <div className="bg-[#FD6F0099] lg:w-[250px] lg:h-[60px] w-[150px] h-[40px] absolute top-[-5px] md:left-[115px] left-[95px] md:top-[-20px] lg:top-[-10px] z-50 lg:left-[95px]"></div>
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
