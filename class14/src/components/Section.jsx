import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Section = () => {
  const data = useContext(UserDataContext);

  return (
    <div className="h-40 w-full">
      <h1 className="text-5xl">{data}</h1>
    </div>
  );
};

export default Section;
