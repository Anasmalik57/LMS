import Footer from "../Components/Footer";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // For checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // For displaying the options
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }
  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    // const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  }
  // ....................................

  function handlelogout(e) {
    e.preventDefault();

    // const res = await dispatch(logout());
    // if (res?.payload?.success) 
    navigate("/");
  }

  // ....................................
  return (
    <div className="min-h-[90vh] transition-all duration-500 ease-in-out ">
      {/* Drawer */}
      <div className="drawer absolute left-0 z-50 w-fit">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold m-4 "
            />
          </label>
        </div>
        {/* DrawerSide */}
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={"24px"} />
              </button>
            </li>

            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to={"/admin/dashboard"}>Admin Dashboard</Link>
              </li>
            )}
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            {!isLoggedIn && (
              <li>
                <div className="w-full flex items-center justify-center box-border space-x-2">
                  <button className=" bg-blue-600 px-4 py-2 w-full rounded-md text-gray-200 font-semibold  ">
                    <Link to={"/login"}>Login</Link>
                  </button>
                  <button className=" bg-violet-600 px-4 py-2 w-full rounded-md text-gray-200 font-semibold ">
                    <Link to={"/signup"}>SignUp</Link>
                  </button>
                </div>
              </li>
            )}
            {/* ................ */}
            {isLoggedIn && (
              <li>
                <div className="w-full flex items-center justify-center box-border space-x-2">
                  <button className=" bg-blue-600 px-4 py-2 w-full rounded-md text-gray-200 font-semibold  ">
                    <Link to={"/user/profile"}>Profile</Link>
                  </button>
                  <button className=" bg-violet-600 px-4 py-2 w-full rounded-md text-gray-200 font-semibold ">
                    <Link onClick={handlelogout}>Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* children props */}
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
