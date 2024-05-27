import React from "react";
import { Link } from "react-router-dom";

const Navigate1 = ({ data, callback, tab }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Link key={index} to={`/administration/${item.data}`}>
          <button
            className={tab === item.data ? "active" : ""}
            onClick={() => callback(item.data)}
          >
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navigate1;
