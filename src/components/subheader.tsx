import React, { ReactNode } from 'react';

type SubHeaderProps = {
  children: ReactNode;
};

export const SubHeader = ({ children }: SubHeaderProps) => {
  return <h1 className="text-xl font-bold p-2"> {children} </h1>;
};
