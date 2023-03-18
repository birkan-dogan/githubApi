import React, { useState } from "react";
import SearchUser from "../components/SearchUser";
import Account from "../components/Account";
import Followers from "../components/Followers";

const Home = () => {
  const [user, setUser] = useState("");

  return (
    <div className="home">
      <div className="search-user">
        <SearchUser setUser={setUser} />
      </div>
      <div className="tabs">{user && <Account user={user} />}</div>
    </div>
  );
};

export default Home;
