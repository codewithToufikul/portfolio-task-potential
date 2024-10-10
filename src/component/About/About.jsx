import { Slider } from "@material-tailwind/react";
import personImage from "../../assets/aboutImage.png";

const About = () => {
  return (
    <div className=" mt-16 w-full flex gap-40 items-center">
      <div>
        <div className="relative w-[465px] mt-20 ">
          <div className="w-full h-[440px] inset-0 rounded-full bg-gradient-to-b from-gray-500 to-[#FD6F00] p-2 bg-clip-border">
            <div className="w-full h-full rounded-full bg-white">
              {/* Your inner content goes here */}
            </div>
          </div>

          <img
            src={personImage}
            alt="Banner"
            className=" min-w-[490px] z-20 absolute top-[-74px] right-[-13px]  object-cover rounded-b-full border-b-[1px]"
          />
          <div className="bg-[#FD6F0099] w-[250px] h-[60px] absolute top-[-5px] z-50 left-[100px]"></div>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" text-6xl font-semibold mb-4">About Me</h1>
          <p className=" text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className=" space-y-7 mt-3">
            <div>
              <h1 className=" text-2xl font-semibold mb-2">UX</h1>
              <Slider className=" w-[700px] text-[#FD6F00]" size="lg" color="red" value={95} />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold mb-2">Website Design</h1>
              <Slider className=" w-[700px] text-[#FD6F00]" size="lg" color="red" value={90} />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold mb-2">App Design </h1>
              <Slider className=" w-[700px] text-[#FD6F00]" size="lg" color="red" value={92} />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold mb-2">Graphic Design </h1>
              <Slider className=" w-[700px] text-[#FD6F00]" size="lg" color="red" value={88} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
