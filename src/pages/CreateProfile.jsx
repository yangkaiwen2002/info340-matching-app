import { useState } from "react";
import { db } from "../firebase"; 
import { ref, push } from "firebase/database";

export default function CreateProfile(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("study");
  const [interests, setInterests] = useState("");
  const [availability, setAvailability] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: name,
      connectionType: type,
      interests: interests.split(",").map((i) => i.trim()),
      availability: availability,
      image: image || "https://i.pravatar.cc/150",
      createdAt: new Date().toISOString()
    };

    const usersRef = ref(db, 'users');

    push(usersRef, newUser)
      .then(() => {
        localStorage.setItem("pm_my_profile", JSON.stringify(newUser));
        
        setName("");
        setInterests("");
        setAvailability("");
        setImage("");

        alert("Profile created and saved to the cloud!");
      })
      .catch((error) => {
        console.error("Error writing to Firebase:", error);
        alert("Failed to save profile. Check your database rules.");
      });
  }

  return (
    <main className="container">
      <h1>Create Profile</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="type">Connection Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="study">Study</option>
          <option value="mentor">Mentor</option>
          <option value="hobby">Hobby</option>
          <option value="carpool">Carpool</option>
        </select>

        <label htmlFor="interests">Interests (comma separated)</label>
        <input
          id="interests"
          value={interests}
          placeholder="Coding, Hiking, Chess"
          onChange={(e) => setInterests(e.target.value)}
        />

        <label htmlFor="availability">Availability</label>
        <input
          id="availability"
          value={availability}
          placeholder="e.g., Weekends, Mon-Wed evenings"
          onChange={(e) => setAvailability(e.target.value)}
        />

        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          value={image}
          placeholder="https://example.com/photo.jpg"
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="primary" type="submit">
          Create Profile
        </button>
      </form>
    </main>
  );
}