import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { db } from "./firebase"; 
import { ref, onValue } from "firebase/database";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Saved from "./pages/Saved";
import CreateProfile from "./pages/CreateProfile";
import MyProfile from "./pages/MyProfile";

export default function App() {
  const [users, setUsers] = useState([]);

useEffect(() => {
    const usersRef = ref(db, 'users');

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      
      if (data) {
        const userList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setUsers(userList);
      } else {
        setUsers([]); 
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route 
            path="/matches" 
            element={<Matches users={users} />} 
          />
          
          <Route 
            path="/saved" 
            element={<Saved users={users} />} 
          />
          <Route 
            path="/create" 
            element={<CreateProfile />} 
          />
          
          <Route 
            path="/my-profile" 
            element={<MyProfile />} 
          />
        </Routes>
      </main>
    </>
  );
}