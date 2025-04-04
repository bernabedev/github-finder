export default function UserCard({ user, onAddFavorite }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.name} />
      <h4>{user.name}</h4>
      <p>{user.location}</p>
      <p className="bio">{user.bio}</p>

      <button onClick={() => onAddFavorite(user)}>Agregar a favoritos</button>
    </div>
  );
}
