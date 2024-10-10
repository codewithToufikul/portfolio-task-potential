import SectionHead from "../../ShareComponent/SectionHead/SectionHead";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import ist1 from '../../assets/1st (1).jpeg';
import ist2 from '../../assets/1st (2).jpeg';
import nd1 from '../../assets/2nd (1).jpeg' ;
import nd2 from '../../assets/2nd (2).jpeg' ;
import rd1 from '../../assets/3rd.jpeg';
import rd2 from '../../assets/3rd(2).jpeg';

const Projects = () => {
  const data = [
    {
      label: "All",
      value: "html",
    },
    {
      label: "UI/UX",
      value: "react",
    },
    {
      label: "Web Design",
      value: "vue",
    },
    {
      label: "App Design",
      value: "angular",
    },
    {
      label: "Graphic Design",
      value: "svelte",
    },
  ];

  return (
    <div className="mt-28 mb-10">
      <SectionHead
        title={"My Projects"}
        text={
          "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        }
      />
      <div className="mt-10">
        <Tabs value="vue" className="">
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-[#FD6F00] shadow-none !text-white",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                className="border-2 mr-2 rounded-xl w-full"
                key={value}
                value={value}
              >
                <h1 className="lg:text-2xl">{label}</h1>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <div className=" mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">

                <div className=" max-w-[425px]">
                    <div className=" relative bg-[#FFEBDB] rounded-md">
                        <img className=" ml-[60px] lg:ml-[120px] w-[280px] h-[490px]" src={ist2} alt="" />
                        <img className=" absolute z-50 top-[93px] left-8  w-[280px] h-[400px]" src={ist1} alt="" />
                    </div>
                    <div className=" space-y-3 mt-5">
                        <p className=" text-xl font-normal text-[#FD6F00]">Web Design </p>
                        <h2 className="text-2xl font-bold">AirCalling Landing Page Design </h2>
                    </div>
                </div>
                <div className=" max-w-[425px]">
                    <div className=" relative bg-[#FFEBDB] rounded-md">
                        <img className="  ml-[60px] lg:ml-[120px] w-[280px] h-[490px]" src={nd2} alt="" />
                        <img className=" absolute z-50 top-[93px] left-8  w-[280px] h-[400px]" src={nd1} alt="" />
                    </div>
                    <div className=" space-y-3 mt-5">
                        <p className=" text-xl font-normal text-[#FD6F00]">Web Design </p>
                        <h2 className="text-2xl font-bold">Business Landing Page Design </h2>
                    </div>
                </div>
                <div className=" max-w-[425px]">
                    <div className=" relative bg-[#FFEBDB] rounded-md">
                        <img className=" ml-[60px] lg:ml-[120px]  w-[280px] h-[490px]" src={rd2} alt="" />
                        <img className=" absolute z-50 top-[93px] left-8  w-[280px] h-[400px]" src={rd1} alt="" />
                    </div>
                    <div className=" space-y-3 mt-5">
                        <p className=" text-xl font-normal text-[#FD6F00]">Web Design </p>
                        <h2 className="text-2xl font-bold">Ecom Web Page Design </h2>
                    </div>
                </div>
            </div>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
