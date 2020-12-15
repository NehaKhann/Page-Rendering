import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const Location = useLocation();
  const History = useHistory();

  return (
    <div>
      <h1>
        This is the {fname} {lname} page
      </h1>
      <p>My Location is {Location.pathname} </p>
      {Location.pathname === "/user/Neha/Khan" ? (
        <button
          onClick={() => {
            History.push("/");
          }}
        >
          Click Meh{" "}
        </button>
      ) : null}
    </div>
  );
};
export default User;
