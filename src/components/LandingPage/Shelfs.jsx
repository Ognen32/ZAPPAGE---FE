import React from "react";
import Shelf from "./Shelf";

// {props.books.map((item, index) => {
//   return (
//     <img key={index} src={item.coverArt} alt={item.title} width="100px" />
//   );
// })}
function Shelfs(props) {
  return (
    <div className="shelfs-div">
      <Shelf comics={props.comics} start="0" end="4" right="yes" />
      <Shelf comics={props.comics} start="4" end="8" />
      <Shelf comics={props.comics} start="8" end="12" left="yes" />
    </div>
  );
}

export default Shelfs;
