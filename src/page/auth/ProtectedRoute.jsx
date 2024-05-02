import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />;
}

export default ProtectedRoute;
