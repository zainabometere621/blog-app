import { Circle, Clock } from "lucide-react";

export default function AllBlogpage() {
  return (
    <main className="min-h-screen bg-[#FDF6EC] px-40 pt-20 space-y-20">
      <section className=" flex gap-10">
        <article className="">
          <h3 className="text-[#8B3B29] pb-4 pt-6 text-xl font-semibold">
            Featured
          </h3>
          <div className="space-y-8">
            <h1 className=" text-5xl font-bold hover:text-[#6B2816] ">
              The Art of Slow Living in a fast World
            </h1>
            <p className="text-lg text-gray-600">
              Eploring how intentional living can transform our daily
              experiences and bring deeper meaning to our routines.
            </p>
            <div className="flex items-center gap-6 text-gray-600  text-sm">
              <p>Elena Martinez</p>

              <Circle size={6} fill="#4B5563" stroke="none" />
              <p>March 15, 2026</p>
              <Circle size={6} fill="#4B5563" stroke="none" />
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <p>5 min Read</p>
              </div>
            </div>
          </div>
        </article>
        <div className="w-full bg-[#F5EDE1] font-bold text-9xl text-[#EADCC9] flex items-center justify-center">
          Featured
        </div>
      </section>
      <hr className="border-[#EADCC9] pt-10" />
    </main>
  );
}
