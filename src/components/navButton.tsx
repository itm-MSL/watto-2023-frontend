import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NavButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-white text-amber-800 font-bold py-2 px-4 rounded-t border-x-2 border-t-2 hover:text-black hover:scale-105"
      {...rest}
    >
      {children}
    </button>
  );
};
