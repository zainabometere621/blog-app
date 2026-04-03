import logo from "/src/assets/logo.png";
import { User } from "lucide-react";
export default function Navbar() {
  return (
    <section className="h-24">
      <nav className="flex justify-between py-2 px-8 items-center">
        <div className="">
          <img src={logo} alt=" brand logo" className="h-12 w-26" />
          <p className="text-[#6B2816] text-sm italic">
            Your thoughts, beautifully written...
          </p>
        </div>
        <span className="flex space-x-4  ">
          <p className="text-sm hover:text-[#6B2816]">Write</p>
          <div className="flex space-x-2 text-sm hover:text-[#6B2816]">
            <User className="h-5 w-5"/>
            <p>Sign In</p>
          </div>
        </span>
       
      </nav>
      
    </section>
  );
}
