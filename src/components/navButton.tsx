import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NavButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-blue-100 text-amber-600 font-bold py-2 px-4 rounded-t border-x-2 border-t-2 hover:text-black"
      {...rest}
    >
      {children}
    </button>
  );
};
