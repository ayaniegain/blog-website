import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "../src/page/Home";
import About from "./page/About";
import Register from "./page/auth/Register";
import DashBoard from "./page/DashBoard";
import NoPageFound from "./page/NoPageFound";
import ProtectedRoute from "./page/auth/ProtectedRoute";
import BlogDetails from "./components/BlogDetails";
import Login from "./page/auth/Login";
import AddBlogs from "./components/userBlog/AddBlogs";
import EditBlog from "./components/userBlog/EditBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogdetails/:blogId" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="addblog" element={<AddBlogs />} />
          <Route path="editblog/:blogId" element={<EditBlog />} />
        </Route>
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default App;
