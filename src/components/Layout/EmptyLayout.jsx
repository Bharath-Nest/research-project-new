import  Content  from './Content';
import React from 'react';

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="app bg-light" {...restProps}>
    <Content fluid>{children}</Content>
  </main>
);

export default EmptyLayout;
