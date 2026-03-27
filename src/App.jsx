import { Routes, Route } from "react-router-dom";

import AuthPage from "../src/pages/AuthPage"
import SingleBlogPage from "../src/pages/SingleBlogPost"
import AllBlogpage from "../src/pages/AllBlogPost"

export default function App() {
  return(
    <Routes>
       <Route path="/Auth" element={<AuthPage />} />
       <Route path="/" element={<AllBlogpage />} />
        <Route path="/post" element={<SingleBlogPage />} />
    </Routes>
  )
}