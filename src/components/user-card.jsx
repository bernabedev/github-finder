export default function UserCard({ user, onAddFavorite, onRemoveFavorite }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.name} />
      <h4>{user.name}</h4>
      <p>{user.location}</p>
      <p className="bio">{user.bio}</p>

      <button onClick={() => onAddFavorite(user)}>Agregar a favoritos</button>
      <button onClick={() => onRemoveFavorite(user)}>
        Eliminar de favoritos
      </button>
    </div>
  );
}
