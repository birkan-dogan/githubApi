import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Account from "./Account";

const Following = () => {
  const [following, setFollowing] = useState([]);
  const location = useLocation();
  const user = location.state;

  const getFollowing = async function () {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${user?.login}/following`
      );
      setFollowing(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFollowing();
  }, []);

  return (
    <div>
      <div className="logo">
        <a href={user.html_url} target="_blank">
          <img src={user.avatar_url} />
          <span>{user.name}'s following list</span>
        </a>
      </div>
      <div className="tab tab-2">
        {following?.map((user) => (
          <div className="followers" key={user.id}>
            <Account user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Following;
