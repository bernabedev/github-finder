import { useState } from "react";

const API_URL = "https://api.github.com/users/";

const getUser = async (username) => {
  const res = await fetch(`${API_URL}${username}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

export default function Search({ onGetUser }) {
  const [search, setSearch] = useState(undefined);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const user = await getUser(search);
      onGetUser(user);
      console.log("user", user);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={handleSearch} className="form">
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
