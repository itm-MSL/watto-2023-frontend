import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-amber-600 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded hover:animate-pulse"
      {...rest}
    >
      {children}
    </button>
  );
};
