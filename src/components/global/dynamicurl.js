import { Link } from "gatsby"
import React from "react"

const DynamicLink = ({ url, data, title, classvalue }) => {
  // Construct the full URL
  const fullUrl = data ? `${url}?tab=${data}` : url;

  // Log the URLs to help with debugging
  console.log(`DynamicLink: url=${url}, data=${data}, fullUrl=${fullUrl}`);

  return (
    <>
      {url.startsWith("/") ? (
        <Link className={classvalue} to={fullUrl}>
          {title}
        </Link>
      ) : (
        <a
          href={fullUrl}
          className={classvalue}
          target=" _blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      )}
    </>
  );
}

export default DynamicLink;
