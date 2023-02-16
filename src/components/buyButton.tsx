import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BuyButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 mx-2 my-4 rounded-xl"
      {...rest}
    >
      {children}
    </button>
  );
};
