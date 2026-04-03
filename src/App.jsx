import { Routes, Route } from "react-router-dom";

import AuthPage from "../src/pages/AuthPage";
import SingleBlogPage from "../src/pages/SingleBlogPost";
import AllBlogpage from "../src/pages/AllBlogPost";
import Layout from "./components/Layout"
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<AllBlogpage />} />
      <Route path="/post" element={<SingleBlogPage />} />
      </Route>
    </Routes>
  );
}
