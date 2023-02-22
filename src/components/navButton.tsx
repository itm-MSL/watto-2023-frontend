import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NavButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-white text-black font-bold py-2 px-4 my-1 rounded hover:text-amber-500 hover:scale-105"
      {...rest}
    >
      {children}
    </button>
  );
};
