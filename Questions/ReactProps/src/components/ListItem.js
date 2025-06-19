import React, { Component } from "react";

// Complete this Component
const ListItem = ({item}) => {
  return (
    <div
      className="ListItem"
      style={{
        height: "30px",
        backgroundColor: item.bgColor,
        display: "flex",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px"
      }}
    >
      <img src={item.icon} alt={item.name}/>
      <a href={item.link} target="_blank" rel="noopener boreferrer" >
        {item.name} </a>
    </div>
  );
};

export default ListItem;
