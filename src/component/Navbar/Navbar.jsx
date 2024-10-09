import navLogo from "../../assets/navlogo.png";

const Navbar = () => {
  const navLink = (
    <>
      <li className=" cursor-pointer font-semibold text-lg mr-7">About Me</li>
      <li className=" cursor-pointer font-semibold text-lg mr-7">Home</li>
      <li className=" cursor-pointer font-semibold text-lg mr-7">Services</li>
      <li className=" cursor-pointer font-semibold text-lg mr-7">Projects</li>
      <li className=" cursor-pointer font-semibold text-lg mr-7">
        Testimonials
      </li>
      <li className=" cursor-pointer font-semibold text-lg mr-7">Contact</li>
    </>
  );
  return (
    <div className="mt-4">
      <div className="navbar justify-between bg-base-100">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <div className=" flex items-center">
            <div className=" w-16 bg-[#FD6F00] rounded-full py-3">
              <img src={navLogo} alt="" />
            </div>
            <p
              style={{ fontFamily: "Montserrat, sans-serif !important" }}
              className="btn btn-ghost tracking-wider text-4xl"
            >
              M<span className="ml-[-8px] font-light text-[#545454]">umair</span>
            </p>
          </div>
        </div>
        <div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className=" w-fit">
          <a className="bg-[#FD6F00] px-4 py-2 text-xl font-normal text-white cursor-pointer rounded-md">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
