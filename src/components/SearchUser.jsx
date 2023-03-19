import React, { useEffect, useState } from "react";
import useThemeContext from "../theme";
import axios from "axios";

const SearchUser = ({ setUser }) => {
  const { colors } = useThemeContext(); // consuming colorContext

  const [search, setSearch] = useState("birkan-dogan");

  const getUser = async function () {
    try {
      const { data } = await axios(`https://api.github.com/users/${search}`);
      setUser(data);
      setSearch("");
    } catch (error) {
      console.log(error);
      setSearch("");
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter Github Username"
        required
        style={{
          background: colors.redAccent[400],
        }}
      />
      <button
        type="submit"
        style={{
          background: colors.primary[100],
          color: colors.grey[100],
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default SearchUser;
