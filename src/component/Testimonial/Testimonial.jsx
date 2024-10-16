import SectionHead from "../../ShareComponent/SectionHead/SectionHead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import text1 from '../../assets/test1 (1).png';
import text2 from '../../assets/test1 (2).png';
import './testimonial.css';

const Testimonial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    appendDots: dots => (
      <div
        style={{
          height: "0px",
          marginTop: "50px",
        }}
      >
        <ul className="space-x-5" style={{ margin: "10px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="bg-gray-500 rounded-3xl w-9 mt-6 custom-dot"
        style={{
          width: "30px",
        }}
      >
        <p className="text-gray-500">-</p>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 1,
          centerPadding: "200px", // Reduced padding for smaller screens
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 1,
          centerPadding: "100px", // Further reduced padding for tablets
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          centerPadding: "20px", // Minimal padding for mobile
        },
      },
    ],
  };

  return (
    <div className="mt-28 mb-10">
      <SectionHead
        title={"Testimonials"}
        text={
          "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        }
      />
      <div className="slider-container mx-auto max-w-full  h-[800px] md:h-[440px] overflow-hidden mt-5">
        <Slider {...settings}>
          <div className="p-4">
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <div className="flex items-center gap-5 md:flex-row flex-col">
                <img className="md:w-[180px] w-[150px] lg:w-[230px]" src={text1} alt="Testimonial 1" />
                <div>
                  <p className="lg:text-xl font-normal">
                    <span className="text-2xl font-bold text-themeColor">``</span>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-2xl font-bold text-themeColor">``</span>
                  </p>
                  <div className="mt-5">
                    <h3 className="lg:text-2xl font-semibold">Name</h3>
                    <p className="lg:text-xl">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <div className="flex items-center gap-5 md:flex-row flex-col">
                <img className="md:w-[180px] w-[150px] lg:w-[230px]" src={text2} alt="Testimonial 1" />
                <div>
                  <p className="lg:text-xl font-normal">
                    <span className="text-2xl font-bold text-themeColor">``</span>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-2xl font-bold text-themeColor">``</span>
                  </p>
                  <div className="mt-5">
                    <h3 className="lg:text-2xl font-semibold">Name</h3>
                    <p className="lg:text-xl">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <div className="flex items-center gap-5 md:flex-row flex-col">
                <img className="md:w-[180px] w-[150px] lg:w-[230px]" src={text1} alt="Testimonial 1" />
                <div>
                  <p className="lg:text-xl font-normal">
                    <span className="text-2xl font-bold text-themeColor">``</span>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-2xl font-bold text-themeColor">``</span>
                  </p>
                  <div className="mt-5">
                    <h3 className="lg:text-2xl font-semibold">Name</h3>
                    <p className="lg:text-xl">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <div className="flex items-center gap-5 md:flex-row flex-col">
                <img className="md:w-[180px] w-[150px] lg:w-[230px]" src={text2} alt="Testimonial 1" />
                <div>
                  <p className="lg:text-xl font-normal">
                    <span className="text-2xl font-bold text-themeColor">``</span>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    <span className="text-2xl font-bold text-themeColor">``</span>
                  </p>
                  <div className="mt-5">
                    <h3 className="lg:text-2xl font-semibold">Name</h3>
                    <p className="lg:text-xl">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
