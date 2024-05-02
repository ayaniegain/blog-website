import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { blogsData } from "../data/useData";

import "../components/style/Dashboard.css";
import Layout from "../components/Layout";

// console.log(blogsData);
function DashBoard() {
  const [blogs, setBlogs] = useState(blogsData);

  const handleDelete = (id) => {
    // let singledeleteBlog = await axios.delete(
    //   `http://localhost:8000/api/v1/user/${id}`
    // );

    const updatedBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(updatedBlogs);

    // location.reload();
  };

  return (
    <Layout>
    <div className="h-screen">
      <section className=" flex justify-around py-4 border-b border-gray-300">
        <div className="nav-head">
          <span className="text-xl"> ♾️ View all blog</span>
        </div>
        <div className="nav-btn">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            <NavLink to={"/protected/addblog"} className="btn">
              Add Blog
            </NavLink>
          </button>
        </div>
      </section>

      <section>
        {blogsData == [] ? (
          <div className="no-customer">
            <h4>No blog found </h4>
          </div>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>SrNo</th>
                  <th>Image</th>
                  <th>Author</th>
                  <th>Title</th>
                  <th>Details</th>
                  <th>Genre</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr
                    key={blog.id}
                    className={index % 2 === 0 ? "even" : "odd"}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <img
                        className="h-10 w-14"
                        src={blog.image}
                        alt={blog.title}
                      />
                    </td>
                    <td>{blog.author}</td>
                    <td>{blog.title}</td>
                    <td>{blog.details}</td>
                    <td>{blog.genre}</td>
                    {/* <td>
                <button className="show-button">
                  <NavLink className="btn" to={`/viewuser/${user._id}`}>Show</NavLink>
                </button>
              </td> */}
                    <td className="action-buttons">
                      <button
                        className="btn first-btn"
                        onClick={() => handleDelete(blog.id)}
                      >
                        Delete
                      </button>
                      <button className="second-btn">
                        <NavLink className="btn" to={`/protected/editblog/${blog.id}`}>
                          Edit
                        </NavLink>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
    </Layout>
  );
}

export default DashBoard;
