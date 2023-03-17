import React, { useState } from "react";
import SearchUser from "../components/SearchUser";
import Followers from "../components/Followers";

const Home = () => {
  const [user, setUser] = useState("");

  return (
    <div className="home">
      <div className="search-user">
        <SearchUser setUser={setUser} />
      </div>
      {/* <Followers followers={followersList} /> */}
    </div>
  );
};

export default Home;
