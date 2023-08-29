/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../store/firebase";
import { useSnackbar } from "notistack";
import Router from "next/router";
import { Context } from "../context/authContext";
import Head from "next/head";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (user !== null) Router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      enqueueSnackbar("Successfully logged in!", {
        variant: "success",
        autoHideDuration: 1700,
      });
      localStorage.setItem("user", JSON.stringify(result.user));
      dispatch({
        type: "LOGIN",
        payload: result.user,
      });
      Router.push("/");
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1700,
      });
    }
  };
  
  return (
    <>
      <div>
        <Head>
          <title>Login</title>
        </Head>
        
        <div className="container mt-5">
          <div className="d-flex flex-column align-items-center">
            <div className="bg-orange-500 rounded-circle p-3">
              <i className="bi bi-lock-fill text-white"></i>
            </div>
            <h1 className="text-gray-800 font-bold mt-2">LOGIN</h1>
            <form onSubmit={handleSubmit} className="mt-1">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
                autoFocus
                required
                type="email"
                placeholder="Email Address"
                autoComplete="on"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
                required
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
              <button
                type="submit"
                className="btn btn-primary justify-content-center "
                disabled={!email || !password}
              >
                Login
              </button>
              <div className="mt-2">
                Don't have an account?{" "}
                <Link href="/register">
                  <span className="text-orange-500 font-bold ml-2 cursor-pointer">
                    Register Now
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

