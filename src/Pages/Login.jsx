import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   usestate's state management
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //   Handle User Input
  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function onLogin(event) {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the details");
      return;
    }

    if (
      !loginData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      toast.error("Please fill a valid email");
      return;
    }

    // calling create account action
    const res = await dispatch(login(loginData));

    // redirect to login page if true
    if (res?.payload?.success) navigate("/");

    // clearing the signup inputs
    setLoginData({
      email: "",
      password: "",
    });
  }

  return (
    <HomeLayout>
      <div className="flex justify-center items-center h-[90vh]">
        <form
          noValidate
          onSubmit={onLogin}
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96  shadow-[0_0_10px_black] "
        >
          <h1 className="text-center text-2xl font-bold ">Login Page</h1>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email..."
              className="bg-transparent px-2 py-1 border rounded-md border-slate-400  "
              onChange={handleUserInput}
              value={loginData.email}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your password..."
              className="bg-transparent px-2 py-1 border rounded-md border-slate-400  "
              onChange={handleUserInput}
              value={loginData.password}
            />
          </div>
          <button
            type="submit"
            className="mt-2 py-1.5 w-full bg-yellow-500 hover:bg-yellow-600 tracking-widest  text-[1.1rem] transition-all ease-in-out duration-300 rounded-md"
          >
            Login account
          </button>
          <p className="text-center">
            don't have an Account ?
            <Link to={"/signup"} className="link text-accent cursor-pointer">
              {" "}
              Signup{" "}
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
