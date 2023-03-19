import { useNavigate } from "react-router-dom";
import useThemeContext from "../theme";

const Account = ({ user }) => {
  const { colors } = useThemeContext(); // consuming colorContext

  const navigate = useNavigate();
  return (
    <div
      className="tab tab-1"
      style={{
        background: colors.blueAccent[500],
      }}
    >
      <img src={user.avatar_url} alt="" />
      <div
        className="username-links"
        style={{
          color: colors.primary[500],
        }}
      >
        <p>{user?.name?.slice(0, 15) || user?.login?.slice(0, 15)}</p>

        <span>
          {user.name ? user.login.slice(0, 15) : null}
          {user.login.length > 15 && "..."}
        </span>
        <a href={user.html_url} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill={colors.grey[300]}
            viewBox="0 0 256 256"
          >
            <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path>
          </svg>
        </a>

        {user.name && (
          <div className="following">
            <div>
              <p onClick={() => navigate("/followers", { state: user })}>
                Followers
              </p>
              <span>{user.followers}</span>
            </div>
            <div>
              <p onClick={() => navigate("/following", { state: user })}>
                Following
              </p>
              <span>{user.following}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
