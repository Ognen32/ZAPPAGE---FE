import React from "react";
import Shelf from "./Shelf";

function Shelfs({ comics = [] }) {
  if (!comics.length) return <p>No comics available</p>;

  return (
    <div className="shelfs-div">
      <Shelf comics={comics} start={0} end={4} right="yes" />
      <Shelf comics={comics} start={4} end={8} />
      <Shelf comics={comics} start={8} end={12} left="yes" />
    </div>
  );
}

export default Shelfs;
