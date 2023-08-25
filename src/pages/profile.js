import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../context/authContext";
import { auth } from "../store/firebase";

const Profile = () => {
  const [email, setEmail] = useState("");
  const { state } = useContext(Context);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userEmail = user.email;
        console.log("User email:", userEmail);
        setEmail(userEmail);
      }
    });

    return () => {
      unsubscribe(); 
    };
  }, []);

  return (
    <Container>
      <h1>Profile Page</h1>
      {email && <p>Email: {email}</p>}
    </Container>
  );
};

export default Profile;

