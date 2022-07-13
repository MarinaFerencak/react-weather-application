import React from "react";

export default function Search() {
  return (
    <form>
      <input type="text" placeHolder="Enter a city..." className="search-bar" />
      <input type="submit" value="Search" className="btn btn-primary" />
      <input type="submit" value="Current" className="btn btn-success" />
    </form>
  );
}
