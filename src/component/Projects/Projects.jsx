import SectionHead from "../../ShareComponent/SectionHead/SectionHead";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import ist1 from '../../assets/1st (1).jpeg';
import ist2 from '../../assets/1st (2).jpeg';

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
    <div className="mt-28">
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
                <h1 className="text-2xl">{label}</h1>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>

          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
