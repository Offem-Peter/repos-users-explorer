import { useState } from "react";
import "./Search.css";

type SearchProp = {
    searchClicked: (query: string) => void,
    loading: boolean,
}

const Search = ({ searchClicked, loading }: SearchProp) => {
    const [searchtext, setSearchtext] = useState<string>("");

    return (
        <div className="search">
            <p>Search</p>
            <input value={searchtext} placeholder="Search..." onChange={(e)=>setSearchtext(e.target.value)}/>
            <button disabled={loading} onClick={()=> searchClicked(searchtext)}>Search  🔍</button>
        </div>

    )
}

export default Search;
