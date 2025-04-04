import Search from "./components/search";
import UserCard from "./components/user-card";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(undefined);
  const [favorites, setFavorites] = useState(new Map());

  const handleAddFavorite = (user) => {
    const newFavorites = new Map(favorites);
    newFavorites.set(user.id, user);
    setFavorites(newFavorites);
  };

  const handleRemoveFavorite = (user) => {
    const newFavorites = new Map(favorites);
    newFavorites.delete(user.id);
    setFavorites(newFavorites);
  };

  return (
    <>
      <div className="container">
        <h1>Buscador de Github</h1>
        <Search onGetUser={setUser} />
        {user && (
          <UserCard
            user={user}
            onAddFavorite={(user) => handleAddFavorite(user)}
            onRemoveFavorite={(user) => handleRemoveFavorite(user)}
            isFavorite={favorites.has(user.id)}
          />
        )}
        <h1>Favoritos</h1>
        {favorites.size > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {Array.from(favorites.values()).map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onAddFavorite={(user) => handleAddFavorite(user)}
                onRemoveFavorite={(user) => handleRemoveFavorite(user)}
                isFavorite={favorites.has(user.id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
