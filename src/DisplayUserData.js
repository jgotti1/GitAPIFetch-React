import React from "react";

function DisplayUserData({ userData }) {
  return <div>{userData !== "" && <h3>Fetched the account information: {userData}</h3>}</div>;
}

export default DisplayUserData;
