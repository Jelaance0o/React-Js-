import React from "react";
import { useState } from "react";

const Nav = (props) => {
  const [newTheme, setNewTheme] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme);
          setNewTheme("");
        }}
      >
        <input
          type="text"
          placeholder="Enter text"
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Nav;
