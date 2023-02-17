import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BuyButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="text-xl border-2 border-green-500 hover:border-green-600 bg-green-200 text-black hover:text-green-600 font-semibold py-2 px-2 mx-2 my-4 rounded-xl animate-bounce"
      {...rest}
    >
      {children}
    </button>
  );
};
