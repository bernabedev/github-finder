export default function UserCard({
  user,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.name} />
      <h4>{user.name}</h4>
      <p>{user.location}</p>
      <p className="bio">{user.bio}</p>

      {!isFavorite && (
        <button onClick={() => onAddFavorite(user)}>Agregar a favoritos</button>
      )}
      {isFavorite && (
        <button onClick={() => onRemoveFavorite(user)}>
          Eliminar de favoritos
        </button>
      )}
    </div>
  );
}
