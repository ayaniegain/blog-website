
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { blogsData } from "../../data/useData";
// import { toast } from "react-toastify";
import "./InputFieldPage.css";
import Layout from "../Layout";

function EditBlog() {
  const navigate = useNavigate();
  let  {blogId}  = useParams();

  console.log(blogId);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [genre, setGenre] = useState("");


  useEffect(() => {
    const blog = blogsData.find((u) => u.id ==Number(blogId));

    console.log(blog);
    if (blog) {
      setAuthor(blog.author);
      setTitle(blog.title);
      // setImage(blog.image);
      setDetails(blog.details);
      setGenre(blog.setGenre);
    }
  }, [blogsData, blogId]);




  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      author !== "" &&
      title !== "" &&
      image !== "" &&
      details !== "" &&
      genre !== ""
    ) {
      // let newBlog = await axios.put("http://localhost:8000/api/v1/blog/${id}", {
      //   author,
      //   title,
      //   image,
      //   details,
      //   genre,
      // });

      // dispatch(createUser(newBlog.data.blog));
      console.log({
        author,
        title,
        image,
        details,
        genre,
      });
      navigate("/");
      // toast("New User Created");
    }
  };

  return (
    <Layout>
      <div className="h-screen">

      <section className=" flex justify-around py-4 border-b border-gray-400 ">
        <div className="nav-head">
          <span className="text-xl"> ➡️ Edit blog</span>
        </div>
        <div className="nav-btn">
          <button className="bg-green-800 text-white px-4 py-2 rounded-md">
            <NavLink to={"/dashboard"} className="btn">
              View All Blog
            </NavLink>
          </button>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-section">
          <div className="input-group-inline">
            <label className="labelHeading" htmlFor="fname">
              Author
            </label>
            <input
              className="inputValue"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              name="author"
              id="author"
              placeholder="Author Name"
              required
            />
          </div>
          <div className="input-group-inline">
            <label className="labelHeading" htmlFor="lname">
              Title
            </label>
            <input
              className="inputValue"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              placeholder="Title Name"
              required
            />
          </div>
          <div className="input-group-inline">
            <label className="labelHeading" htmlFor="phone">
              set Image
            </label>
            <input
              className="inputValue"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="file"
              name="image"
              id="image"
              placeholder="select Image"
              required
            />
          </div>
          <div className="input-group-inline">
            <label className="labelHeading" htmlFor="altphone">
              Details
            </label>
            <input
              className="inputValue"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              type="text"
              name="details"
              id="details"
              placeholder="Add Details"
              required
            />
          </div>
          {/* <div className="input-group-inline">
            <label  className="labelHeading" htmlFor="email">Email Address</label>
            <input
            className="inputValue"

              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div> */}
          <div className="input-group-inline">
            <label className="labelHeading">Select an option:</label>
            <select value={genre} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {genre && <p>You selected: {genre}</p>}
          </div>
        </div>

        <div className="button-section">
          <button type="submit" className="add-button">
            Update Blog
          </button>
        </div>
      </form>
      </div>

    </Layout>
  );
}

export default EditBlog;
