import { useState } from "react";

const API_URL = "http://192.168.1.227:3000/api";

const getUser = async (username) => {
  const res = await fetch(
    `https://mocki.io/v1/433bbc62-fee5-4109-88e5-a735097e868f`
  );
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
