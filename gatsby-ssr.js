export { wrapPageElement } from './wrapPageElement';
// gatsby-ssr.js
import React from 'react';
import { StaticRouter } from 'react-router-dom';

export const wrapRootElement = ({ element }) => (
  <StaticRouter location={location}>{element}</StaticRouter>
);
