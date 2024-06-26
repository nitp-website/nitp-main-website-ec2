import React from "react";

const DynamicLink = ({ url, data, title, classvalue }) => {
  // Construct the full URL
  const fullUrl = data ? `${url}?tab=${data}` : url;

  // Log the URLs to help with debugging
  console.log(`DynamicLink: url=${url}, data=${data}, fullUrl=${fullUrl}`);

  // Function to handle link click for internal navigation
  const handleClick = (e) => {
    if (url.startsWith("/")) {
      e.preventDefault();
      window.location.href = fullUrl;
    }
  };

  return (
    <a
      href={fullUrl}
      className={classvalue}
      target={url.startsWith("/") ? "_self" : "_blank"}
      rel={url.startsWith("/") ? undefined : "noopener noreferrer"}
      onClick={url.startsWith("/") ? handleClick : undefined}
    >
      {title}
    </a>
  );
};

export default DynamicLink;
