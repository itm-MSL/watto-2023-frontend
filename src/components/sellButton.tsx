import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SellButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="text-xl border-2 border-red-500 hover:border-red-600 bg-red-200 text-black hover:text-red-600 font-semibold py-2 px-4 mx-2 my-4 rounded-xl animate-pulse"
      {...rest}
    >
      {children}
    </button>
  );
};
