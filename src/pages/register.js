import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../store/firebase";
import { useSnackbar } from "notistack";
import Router from "next/router";
import { Context } from "../context/authContext";
import Head from "next/head";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const { state: { user }, dispatch } = useContext(Context);

  useEffect(() => {
    if (user !== null) Router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      enqueueSnackbar("Successfully registered!", {
        variant: "success",
        autoHideDuration: 1700,
      });
      localStorage.setItem("email", JSON.stringify(email));
      setTimeout(() => {
        enqueueSnackbar("Please login to continue", {
          variant: "success",
          autoHideDuration: 1700,
        });
        Router.push("/login");
      }, 2000);
      console.log(result);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1500,
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <div className="container mt-5">
        <div className="d-flex flex-column align-items-center">
          <div className="bg-orange-500 rounded-circle p-3">
            <i className="bi bi-lock-fill text-white"></i>
          </div>
          <h1 className="text-gray-800 font-weight-bold mt-2">REGISTER</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                autoFocus
                required
                type="email"
                id="email"
                placeholder="Email Address"
                autoComplete="on"
              />
            </div>
            <div className="mb-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
              />
              <small className="form-text text-muted">
                Password should contain at least 6 characters
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-warning mt-2"
              disabled={!email || !password || password.length < 6}
            >
              Register
            </button>
            <p className="mt-2">
              Already have an account?
              <Link href="/login">
                <span className="text-orange-500 font-weight-bold ml-2 cursor-pointer">
                  Login Now
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
