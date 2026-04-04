import logo from "/src/assets/logo.png";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
export default function Navbar() {
  return (
    <section>
    <div className="h-24">
      <nav className="flex justify-between py-2 px-12 items-center">
        <NavLink to ="/" className="">
          <img src={logo} alt=" brand logo" className="h-12 w-26" />
          <p className="text-[#6B2816] text-sm italic">
            Your thoughts, beautifully written...
          </p>
        </NavLink>
        <div className="flex space-x-4  ">
          <NavLink to="/auth" className="text-sm hover:text-[#6B2816]">Write</NavLink>
          <NavLink to="/auth" className="flex space-x-2 text-sm hover:text-[#6B2816]">
            <User className="h-5 w-5" />
            <p>Sign In</p>
          </NavLink>
        </div>
      </nav>
     
    </div>
     <hr className="border-[#6B2816]"/>
    </section>
  );
}
