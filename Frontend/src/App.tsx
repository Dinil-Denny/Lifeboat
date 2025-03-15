import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserHeader from "./components/userComponents/UserHeader";
import AdminHeader from "./components/adminComponents/AdminHeader";
import Footer from "./components/userComponents/Footer";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <>
      {isAdminPage ? <AdminHeader /> : <UserHeader />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Outlet />

      {isAdminPage ? null : <Footer />}
    </>
  );
}

export default App;
