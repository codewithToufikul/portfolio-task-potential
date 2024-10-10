import SectionHead from "../../ShareComponent/SectionHead/SectionHead";
import { Input } from "@material-tailwind/react";

const Contract = () => {
  return (
    <div className=" mt-28">
      <SectionHead
        title={"Lets Design Together"}
        text={
          "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        }
      />
      <div className="flex justify-center gap-5 items-center mt-16">
        <div className="w-[570px]">
          <Input
            type="email"
            placeholder="Enter Your Email !"
            className="!border !border-gray-300 bg-gray-100 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div>
          <a className="bg-[#FD6F00] px-5 py-2 text-lg font-normal text-white cursor-pointer rounded-md">
            Contract Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contract;
