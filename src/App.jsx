import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "../src/pages/AuthPage";
import WriteBlog from "../src/pages/WriteBlog";
import AllBlogpage from "../src/pages/AllBlogPost";
import Layout from "./components/Layout";
import SingleBlog from "./pages/SingleBlog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<AllBlogpage />} />
          <Route path="/write-blog" element={<WriteBlog />} />
          <Route path="/blog:id" element={<SingleBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
