function FetchResponse({ userName, goodFetch, loading, fetchStatus }) {
  return (
    <div className="selected">
      {loading && <h3>Fetching the account of: {userName}...</h3>}

      {!loading && goodFetch && (
        <h3>
          Fetched the account of: <p>{userName}</p>
        </h3>
      )}

      {!loading && fetchStatus === "notFound" && (
        <h3>
          This Account does not exsist: <p>{userName}</p> please try again...
        </h3>
      )}

      {!loading && fetchStatus === "rateLimited" && (
        <h3>GitHub's API rate limit has been reached. Please wait a bit and try again.</h3>
      )}

      {!loading && fetchStatus === "error" && <h3>Something went wrong fetching that account. Please try again.</h3>}
    </div>
  );
}

export default FetchResponse;
