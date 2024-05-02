import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";


const Register = () => {
  let navigate=useNavigate()

  const [createBlog, setCreateBlog] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, SetError] = useState({
    userError: "",
    emailError: "",
    PasswordError: "",
  });

  const clearData = () => {
    setCreateBlog({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    const { username, email, password } = createBlog;
    if (username.length < 3) {
      console.log(error);

      SetError({ userError: "error in user length" });

      // errorHandler(username)
    } else if ( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      SetError({ emailError: "error in email " });
    } else if (password.length < 5) {
      SetError({ PasswordError: "error in password length " });
    } else {

      // try {
      //   await axios.post('http://localhost:8000/signup', { email, password });
      //   console.log('User signed up successfully');
      // } catch (error) {
      //   console.error('Sign-up failed:', error.response.data.message);
      // }
      console.log(createBlog);
      clearData();
      navigate('/dashboard')


    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setCreateBlog({ ...createBlog, [name]: value });
  };

  return (
    <Layout>
      <div className="h-screen">
      <form className="max-w-sm mx-auto mt-28 " onSubmit={handleSubmit}>
        <div className="text-center ">
          <h2 className="text-xl pb-2 font-bold">Register</h2>
        </div>
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            UserName
          </label>
          <input
            type="text"
            name="username"
            value={createBlog.username}
            onChange={handlechange}
            id="username"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="your name"
            required
          />
          {error.userError &&
          <span className="text-red-600">{error.userError}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={createBlog.email}
            onChange={handlechange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
          {error.emailError &&
          <span className="text-red-600">{error.emailError}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            placeholder="*****"
            value={createBlog.password}
            name="password"
            onChange={handlechange}
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          {error.PasswordError &&
          <span className="text-red-600">{error.PasswordError}</span>}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Register new account
        </button>
      </form>
      </div>
    </Layout>
  );
};

export default Register;
