import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Account from "./Account";

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const location = useLocation();
  const user = location.state;

  const getFollowers = async function () {
    try {
      const { data } = await axios(`${user.followers_url}`);
      setFollowers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <div>
      <div className="logo">
        <a href={user.html_url} target="_blank">
          <img src={user.avatar_url} />
          <span>{user.name}'s followers list</span>
        </a>
      </div>

      <div className="tab tab-2">
        {followers?.map((follower) => (
          <div className="followers" key={follower.id}>
            <Account user={follower} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
