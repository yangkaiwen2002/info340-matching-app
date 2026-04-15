import { useState } from "react";

export default function SearchBar(props){

  const [query,setQuery] = useState("")

  function handleChange(e){

    const value = e.target.value

    setQuery(value)

    props.onSearch(value)

  }

  return(

    <input
      className="search"
      placeholder="Search users..."
      value={query}
      onChange={handleChange}
    />

  )

}