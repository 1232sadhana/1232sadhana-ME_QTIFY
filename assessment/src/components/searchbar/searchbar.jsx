import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import "../searchbar/searchbar.css";
import SearchRes from "../search/search";
import { useState } from "react";
const SearchBarJsx = () => {
  const [keys, setKey] = useState("");
  const [showSearch, setSearch] = useState(false);
  let searcher = (e) => {
    setKey(e.target.value.toLowerCase());
    setSearch(true);
  };

  return (
    <div className="parent">
      <input onChange={searcher} className="box" type="search" />

      <button className="search">
        <SearchIcon />
      </button>
      {showSearch ? <SearchRes keys={keys} show={setSearch} /> : <></>}
    </div>
  );
};
export default SearchBarJsx;