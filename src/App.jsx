import Search from "./components/search";
import UserCard from "./components/user-card";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(undefined);
  return (
    <>
      <div className="container">
        <h1>Buscador de Github</h1>
        <Search onGetUser={setUser} />
        {user && <UserCard user={user} />}
      </div>
    </>
  );
}

export default App;
