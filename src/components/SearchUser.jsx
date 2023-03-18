import React, { useState } from "react";
import useThemeContext from "../theme";
import axios from "axios";

const SearchUser = ({ setUser }) => {
  const { colors } = useThemeContext(); // consuming colorContext

  const [search, setSearch] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();

    try {
      const { data } = await axios(`https://api.github.com/users/${search}`);
      setUser(data);
      setSearch("");
    } catch (error) {
      console.log(error);
      setSearch("");
    }
  };

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
          background: colors.primary[200],
          color: colors.grey[600],
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default SearchUser;
