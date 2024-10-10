import { Slider } from "@material-tailwind/react";
import personImage from "../../assets/aboutImage.png";

const About = () => {
  return (
    <div className=" mt-16 w-full flex md:flex-row flex-col-reverse md:gap-20 gap-10 lg:gap-40 items-center">
      <div>
        <div className="relative w-[350px] md:w-[400px] lg:w-[465px] mt-20 ">
          <div className="w-full h-[350px] md:h-[400px] lg:h-[440px] inset-0 rounded-full bg-gradient-to-b from-gray-500 to-[#FD6F00] p-2 bg-clip-border">
            <div className="w-full h-full rounded-full bg-white">
              {/* Your inner content goes here */}
            </div>
          </div>

          <img
            src={personImage}
            alt="Banner"
            className=" lg:min-w-[490px] z-20 absolute top-[-20px] md:top-[-25px] lg:top-[-74px] right-[-1px] md:-[-50px] lg:right-[-13px]  object-cover rounded-b-full border-b-[1px]"
          />
          <div className="bg-[#FD6F0099] w-[150px] lg:w-[250px] h-[40px] md:left-[120px] md:top-[40px] lg:h-[60px] absolute top-[30px] lg:top-[-5px] z-50 left-[120px]"></div>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" md:text-[50px] text-[40px] lg:text-[66px] font-semibold mb-4">About Me</h1>
          <p className=" md:text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className=" space-y-7 mt-3">
            <div>
              <h1 className=" text-xl md:text-2xl font-semibold mb-2">UX</h1>
              <Slider className=" lg:w-[700px] text-[#FD6F00]" size="lg" color="red" value={95} />
            </div>
            <div>
              <h1 className=" text-xl md:text-2xl font-semibold mb-2">Website Design</h1>
              <Slider className=" lg:w-[700px] text-[#FD6F00]" size="lg" color="red" value={90} />
            </div>
            <div>
              <h1 className=" text-xl md:text-2xl font-semibold mb-2">App Design </h1>
              <Slider className=" lg:w-[700px] text-[#FD6F00]" size="lg" color="red" value={92} />
            </div>
            <div>
              <h1 className=" text-xl md:text-2xl font-semibold mb-2">Graphic Design </h1>
              <Slider className=" lg:w-[700px] text-[#FD6F00]" size="lg" color="red" value={88} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
