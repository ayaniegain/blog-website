import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800">404 - Not Found</h2>
        <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      </div>
    </div>
    </Layout>
  );
};

export default NotFoundPage;
