import "./Search.css";

function Search() {
  return (
    <>
      <div className="search-div">
        <div className="search-icon-input">
          <input
            className="search"
            type="text"
            name="search"
            placeholder="Enter keywords....."
          />
          <button className="search-icon-btn">
            <img
              className="search-icon"
              src="/images/search-icon.png"
              alt="search-icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
