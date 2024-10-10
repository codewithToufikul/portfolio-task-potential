import SectionHead from "../../ShareComponent/SectionHead/SectionHead";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import cardvector1 from '../../assets/cardVector (1).png'
import cardvector2 from '../../assets/cardVector (2).png'
import cardvector3 from '../../assets/cardVector (3).png'
import cardvector4 from '../../assets/cardVector (4).png'

const Services = () => {
  return (
    <div className=" mt-28">
      <SectionHead
        title={"Services"}
        text={
          "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        }
      />
      <div className=" mt-6">
        <div className=" flex flex-wrap justify-between">
          <Card className="mt-6 hover:shadow-xl cursor-pointer w-[330px] bg-[#F8F8F8] py-7">
            <CardBody>
            <img className="mb-4 h-14 w-16 " src={cardvector1} alt="" />
              <Typography variant="h6" color="blue-gray" className="mb-2 text-3xl">
              UI/UX
              </Typography>
              <Typography className=" text-xl font-normal">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 hover:shadow-xl cursor-pointer w-[330px] bg-[#F8F8F8] py-7">
            <CardBody>
            <img className="mb-4 h-14 w-16 " src={cardvector4} alt="" />
              <Typography variant="h6" color="blue-gray" className="mb-2 text-3xl">
              Web Design 
              </Typography>
              <Typography className=" text-xl font-normal">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 hover:shadow-xl cursor-pointer w-[330px] bg-[#F8F8F8] py-7">
            <CardBody>
            <img className="mb-4 h-14 w-16 " src={cardvector2} alt="" />
              <Typography variant="h6" color="blue-gray" className="mb-2 text-3xl">
              App Design
              </Typography>
              <Typography className=" text-xl font-normal">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 hover:shadow-xl cursor-pointer w-[330px] bg-[#F8F8F8] py-7">
            <CardBody>
            <img className="mb-4 h-14 w-16 " src={cardvector3} alt="" />
              <Typography variant="h6" color="blue-gray" className="mb-2 text-3xl">
              Graphic Design 
              </Typography>
              <Typography className=" text-xl font-normal">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
