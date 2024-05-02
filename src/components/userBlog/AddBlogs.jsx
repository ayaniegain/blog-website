import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { blogsData } from "../../data/useData";
// import { toast } from "react-toastify";
import "./InputFieldPage.css";
import Layout from "../Layout";

function AddBlogs() {
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [genre, setGenre] = useState("");

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleImages=(e)=>{

    const file=e.target.files[0]
    setImage(file)
    console.log(file);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      author !== "" &&
      title !== "" &&
      image !== "" &&
      details !== "" &&
      genre !== ""
    ) {
      // let newBlog = await axios.post("http://localhost:8000/api/v1/blog/", {
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

      blogsData.push({
        author,
        title,
        image:URL.createObjectURL(image),
        details,
        genre,
      })
      navigate("/dashboard");
      // toast("New User Created");
    }
  };

  return (
    <Layout>

      <div className="h-screen">
      <section className=" flex justify-around py-4 border-b border-gray-400 ">
        <div className="nav-head">
          <span className="text-xl"> ♾️ Add blog</span>
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
            <label className="labelHeading" htmlFor="altphone">
              Details
            </label>
            <textarea
            rows={4} cols={50}
              className="inputValue"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              type='text'
              name="details"
              id="details"
              placeholder="Add Details"
              required
            />
          </div>
          
         
          <div className="input-group-inline">
            <label className="labelHeading">Select an option:</label>
            <select 
              className="inputValue w-20"
            
            value={genre} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Health">Health</option>
              <option value="Marketing">Marketing </option>
              <option value="Technology">Technology</option>
            </select>
            {genre && <p className="mx-6 text-green-500">You have selected: <span className="font-bold">{genre}</span></p>}
          </div>
        </div>
        <div className="input-group-inline flex  align-middle ">

          <div>

            <label className="labelHeading" htmlFor="phone">
              Set Image
            </label>
            <input
              onChange={handleImages}
              type="file"
              placeholder="select Image"
              required
              />
              </div>
            {image?<img className="h-20 mx-4 " src={URL.createObjectURL(image)}/> :''} 
          </div>

        <div className="button-section">
          <button type="submit" className="add-button">
            ADD
          </button>
        </div>
      </form>
      </div>
    </Layout>
  );
}

export default AddBlogs;
