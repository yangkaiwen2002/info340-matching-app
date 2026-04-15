import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const LS_KEY = "pm_saved_ids";

function loadSaved() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function Matches() {

  const [firebaseUsers, setFirebaseUsers] = useState([]);
  const [savedIds, setSavedIds] = useState(loadSaved());
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("name");


  useEffect(() => {
    const usersRef = ref(db, "users");

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};


      const list = Object.entries(data).map(([id, user]) => ({
        ...user,
        id,
      }));

      setFirebaseUsers(list);
    });
  }, []);


  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  function toggleSave(id) {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter(x => x !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  }


  const filteredUsers = firebaseUsers.filter(user => {
    const name = user.name || "";
    const type = user.connectionType || "";

    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === "all" ||
      type.toLowerCase() === filterType.toLowerCase();

    return matchesSearch && matchesFilter;
  });


  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") {
      return (a.name || "").localeCompare(b.name || "");
    }
    if (sortBy === "newest") {
      return (b.createdAt || 0) - (a.createdAt || 0);
    }
    if (sortBy === "connectionType") {
      return (a.connectionType || "").localeCompare(b.connectionType || "");
    }
    return 0;
  });

  const cards = sortedUsers.map(user => (
    <UserCard
      key={user.id}
      user={user}
      isSaved={savedIds.includes(user.id)}
      onToggleSave={() => toggleSave(user.id)}
    />
  ));

  return (
    <main className="container">
      <h1 className="section-title">Find Matches</h1>

      <SearchBar onSearch={setSearchTerm} />
      <FilterBar onFilter={setFilterType} />

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name A–Z</option>
          <option value="newest">Newest</option>
          <option value="connectionType">Connection Type</option>
        </select>
      </div>

      <div className="grid">
        {cards}
      </div>
    </main>
  );
}



