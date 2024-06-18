import { Drawer } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full">
      {/* convert to links */}
      <div className="sm:hidden lg:block md:block">
        <div className="flex flex-row justify-between pb-4 font-semibold">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <h1 className="pt-5 pl-3">GO-FUEL</h1>
          </div>
          <div className="flex flex-row space-x-10 pt-5">
            <div
              onClick={() => {
                navigate("/about");
              }}
              className="cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => {
                navigate("/gofuel");
              }}
              className="cursor-pointer"
            >
              GO-FUEL Program
            </div>
            <div
              onClick={() => {
                navigate("/contact");
              }}
              className="cursor-pointer"
            >
              Contact
            </div>
          </div>
          <h1 className="pt-5 pr-3">Order Now</h1>
        </div>
      </div>
      <div className="sm:block lg:hidden md:hidden w-full">
        <div className="flex flex-row items-center justify-between py-4 font-semibold px-5">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer text-center"
          >
            <h1 className="pl-3">GO-FUEL</h1>
          </div>
          <RxHamburgerMenu
            className="w-7 h-7"
            onClick={() => setOpen(true)}
          />
        </div>
        <Drawer open={open} onClose={()=>setOpen(false)} title={<h1 className="pl-3">GO-FUEL</h1>} width={250}>
          <div className="flex flex-col space-y-5 pt-5">
            <div
              onClick={() => {
                navigate("/about");
                setOpen(false)
              }}
              className="cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => {
                navigate("/gofuel");
                setOpen(false)
              }}
              className="cursor-pointer"
            >
              GO-FUEL Program
            </div>
            <div
              onClick={() => {
                navigate("/contact");
                setOpen(false)
              }}
              className="cursor-pointer"
            >
              Contact
            </div>
          </div>
          <h1 className="pt-5 pr-3">Order Now</h1>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
