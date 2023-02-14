import React, { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <h1 className="text-3xl font-bold pb-2"> {children} </h1>;
};
