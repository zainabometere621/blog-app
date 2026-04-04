import { Send, ArrowLeft } from "lucide-react";

export default function SingleBlogPage() {
  return (
    <main className="h-screen bg-[#FDF6EC]">
      <section className="px-40 pt-10 space-y-10">
        <div className="flex justify-between items-center ">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-[#6B2816]">
            <ArrowLeft className="h-4 w-4" />
            <p className="text-sm ">Back</p>
          </button>
          <button className="flex items-center bg-[#6B2816] hover:bg-[#8B3B29] text-white flex space-x-2  rounded py-2 px-5">
            <Send className="h-4 w-4" />
            <p className="text-base">Publish</p>
          </button>
        </div>
        <input type="text" placeholder="Post title..." className="w-full mt-10 bg-transparent outline-none text-5xl font-bold placeholder-gray-600"/>
        <textarea placeholder="Tell your story..." className="w-full mt-6 bg-transparent outline-none text-lg leading-relaxed placeholder-gray-600 resize-none"  onInput={(e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }}></textarea>
      </section>
    </main>
  );
}
