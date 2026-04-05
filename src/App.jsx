import { Routes, Route } from "react-router-dom";

import AuthPage from "../src/pages/AuthPage";
import WriteBlog from "../src/pages/WriteBlog";
import AllBlogpage from "../src/pages/AllBlogPost";
import Layout from "./components/Layout"
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<AllBlogpage />} />
      <Route path="/write-blog" element={<WriteBlog />} />
      </Route>
    </Routes>
  );
}
