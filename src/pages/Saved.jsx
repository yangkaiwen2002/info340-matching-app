import { useEffect, useMemo, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { db } from "../firebase";

import UserCard from "../components/UserCard";

export default function Saved(props) {

  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const savedRef = ref(db, "saved");

    onValue(savedRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ids = Object.keys(data);
        setSavedIds(ids);
      } else {
        setSavedIds([]);
      }
    });
  }, []);

  const savedUsers = useMemo(() => {
    return props.users.filter(u => savedIds.includes(u.id));
  }, [props.users, savedIds]);

  function toggleSave(id) {
    const itemRef = ref(db, `saved/${id}`);
    remove(itemRef);
  }

  const cards = savedUsers.map(user => (
    <UserCard
      key={user.id}
      user={user}
      isSaved={true}
      onToggleSave={() => toggleSave(user.id)}
    />
  ));

  return (
    <main className="container">
      <h1>Saved Matches</h1>

      {cards.length === 0
        ? <p>No saved profiles yet.</p>
        : <div className="grid">{cards}</div>
      }

    </main>
  );
}


