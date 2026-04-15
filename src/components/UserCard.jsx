export default function UserCard(props) {
  const user = props.user;


  const interests = Array.isArray(user.interests)
    ? user.interests
    : user.interests
    ? [user.interests]
    : [];

  const tags = interests.map((tag) => (
    <span className="tag" key={tag}>
      {tag}
    </span>
  ));

  return (
    <div className="profile-card">

      <img
        className="avatar"
        src={user.image || "https://via.placeholder.com/150"}
        alt={user.name}
      />

      <h3>{user.name}</h3>

      <p className="connection">
        Looking for {user.connectionType}
      </p>

      <div className="tag-container">{tags}</div>

      <p className="availability">{user.availability}</p>

      <button
        className="primary"
        onClick={() => props.onToggleSave(user.id)}
      >
        
        {props.isSaved ? "Saved" : "Save"}

      </button>

    </div>
  );
}
