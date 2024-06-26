export { wrapPageElement } from './wrapPageElement';
export { shouldUpdateScroll } from './shouldUpdateScroll';
// gatsby-browser.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const wrapRootElement = ({ element }) => <Router>{element}</Router>;
// gatsby-browser.js
import { navigate } from "gatsby";

export const onRouteUpdate = ({ location }) => {
  // Check if the current path is a non-existent page
  if (window.___navigate && location.pathname === "/dev-404-page/") {
    navigate("/404/");
  }
};
