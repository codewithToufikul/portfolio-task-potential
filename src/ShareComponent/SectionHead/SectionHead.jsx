

// eslint-disable-next-line react/prop-types
const SectionHead = ({title, text}) => {
    return (
        <div className=" max-w-[930px] mx-auto text-center">
            <h1 className=" md:text-[50px] text-[40px] lg:text-[66px] font-semibold">{title}</h1>
            <p className=" md:text-xl font-normal">{text}</p>
        </div>
    );
};

export default SectionHead;