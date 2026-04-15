import { useParams } from 'react-router';

export default function Profile(props) {
  const { users, savedIds, onToggleSave } = props;
  const params = useParams();

  const selectedUser = users.find((user) => String(user.id) === params.userId);

  if (!selectedUser) {
    return (
      <section>
        <h2>Profile not found</h2>
        <p>The profile you are looking for does not exist.</p>
      </section>
    );
  }

  const isSaved = savedIds.includes(selectedUser.id);

  const interestTags = selectedUser.interests.map((interest) => {
    return (
      <span className="tag" key={interest}>
        {interest}
      </span>
    );
  });

  const availabilityTags = selectedUser.availability.map((time) => {
    return (
      <span className="tag" key={time}>
        {time}
      </span>
    );
  });

  return (
    <section className="profile-page">
      <h2>{selectedUser.name}</h2>

      <img
        className="profile-image-large"
        src={selectedUser.image}
        alt={`${selectedUser.name} profile`}
      />

      <p><strong>Connection type:</strong> {selectedUser.connectionType}</p>
      <p><strong>Bio:</strong> {selectedUser.bio}</p>

      <div className="mini">
        <div>
          <h3 className="mini-title">Interests</h3>
          <div className="chips">{interestTags}</div>
        </div>

        <div>
          <h3 className="mini-title">Availability</h3>
          <div className="chips">{availabilityTags}</div>
        </div>
      </div>

      <button
        className="btn"
        type="button"
        aria-pressed={isSaved}
        onClick={() => onToggleSave(selectedUser.id)}
      >
        {isSaved ? '★ Saved' : '☆ Save'}
      </button>
    </section>
  );
}