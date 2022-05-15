import React from "react";

function Container(props) {
  return <div className="p-5 container mx-auto">{props.children}</div>;
}

export default Container;
