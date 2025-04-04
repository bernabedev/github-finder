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

  return (
    <>
      <div className="container">
        <h1>Buscador de Github</h1>
        <Search onGetUser={setUser} />
        {user && (
          <UserCard
            user={user}
            onAddFavorite={(user) => handleAddFavorite(user)}
          />
        )}
        <h1>Favoritos</h1>
        {favorites.size > 0 && (
          <div>
            {Array.from(favorites.values()).map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onAddFavorite={(user) => handleAddFavorite(user)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
