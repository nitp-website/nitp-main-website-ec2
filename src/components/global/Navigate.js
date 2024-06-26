import React, { useState, useEffect } from "react";
import { NavigateStyle } from "../styles/NavigateStyle";
import DynamicLink from "./dynamicurl";

const Navigate = ({ callback, data, tab }) => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    setActive(2);
  }, [tab]);

  return (
    <NavigateStyle>
      {data.map((item, index) => {
        if (item.data) {
          return (
            <button
              key={index}
              className={`childLink ${item.data === tab && active === 1 ? "active" : ""}`}
              onClick={() => {
                callback(item.data);
                setActive(2);
              }}
            >
              {item.img ? <img src={item.img} className="image" alt="" /> : null}
              <p>{item.title}</p>
            </button>
          );
        } else if (item.url) {
          return (
            <DynamicLink
              key={index}
              url={item.url}
              data={item.data}
              title={
                <>
                  {item.img ? <img src={item.img} className="image" alt="" /> : null}
                  <p>{item.title}</p>
                </>
              }
              classvalue={`childLink ${item.data === tab && active === 1 ? "active" : ""}`}
            />
          );
        }
        return null;
      })}
    </NavigateStyle>
  );
};

export default Navigate;
