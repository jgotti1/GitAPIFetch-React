import React from 'react'

function FetchResponse({userData, goodFetch, userName}) {
  return (
    <div className="selected">
      {goodFetch && (
        <h3>
          Fetched the account of: <p>{userName}</p>
        </h3>
      )}
      {userData === "notFound" && (
        <h3>
          This Account does not exsist: <p>{userName}</p> please try again...
        </h3>
      )}
    </div>
  );
}

export default FetchResponse
