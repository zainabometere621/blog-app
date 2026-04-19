import { UserCircle2 } from "lucide-react";
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(() => {
    return JSON.parse(localStorage.getItem("blogs")) || [];
  });

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return(
   < BlogContext.Provider value={{blogs, setBlogs, user, setUser}}>{children}</BlogContext.Provider>
  )
}
