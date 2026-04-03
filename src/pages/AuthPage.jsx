import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function AuthPage() {
  return (
    <section className="flex space-y-6 flex-col items-center bg-[#FDF6EC] pt-4">
      <div>
        <img src={logo} alt="brand logo" className="h-20 w-28" />
        {/* <p className="text-[#6B2816] text-sm italic text-center">
          Your thoughts, beautifully written...
        </p> */}
      </div>
      <p className="text-base text-center text-gray-600">
        Sign in to create and your manage posts
      </p>
      <div className="space-y-9 bg-white rounded-md border w-1/3 mx-auto p-6">
        <div className="space-y-2">
          <p className="font-semibold text-base">Email</p>
          <input
            type="email"
            placeholder="enter your email"
            className="text-sm w-full  px-4 py-3 border rounded-md focus:outline-none focus:border-[#6B2816]"
          />
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-base">Password</p>
          <input
            type="password"
            placeholder="enter your password"
            className="text-sm w-full px-4 py-3 border rounded-md  focus:outline-none focus:border-[#6B2816]"
          />
        </div>
        <div className="space-y-6">
          <button className="bg-[#6B2816] hover:bg-[#8B3B29] text-white flex space-x-2 items-center justify-center rounded-md w-full py-3">
            <NavLink to = "/write-blog" className="font-semibold">Sign In</NavLink>
            <ArrowRight className="h-5 w-5" />
          </button>
          <NavLink
            to="/"
            className="hover:text-[#6B2816] text-gray-600 text-base block text-center "
          >
            Continue as guest
          </NavLink>
        </div>
      </div>
    </section>
  );
}
