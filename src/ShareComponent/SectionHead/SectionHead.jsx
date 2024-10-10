

// eslint-disable-next-line react/prop-types
const SectionHead = ({title, text}) => {
    return (
        <div className=" max-w-[930px] mx-auto text-center">
            <h1 className="text-[66px] font-semibold">{title}</h1>
            <p className=" text-xl font-normal">{text}</p>
        </div>
    );
};

export default SectionHead;