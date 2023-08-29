import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../context/authContext";
import { auth } from "../store/firebase";
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProfileCard from "@/components/cards/ProfileCard";

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
    < >
    <Breadcrumb title={'Profile'}/>
    <Container>
      {email && <p>Email: {email}</p>}
      <ProfileCard/>
    </Container>
    </>
   
  );
};

export default Profile;

