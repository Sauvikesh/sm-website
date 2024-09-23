import { ReactNode } from 'react';
import { Reveal } from './Reveal'; // assuming your Reveal component is in the same folder
import React from 'react';

type RevealWrapperProps = {
  children: ReactNode;
};

export const RevealWrapper = ({ children }: RevealWrapperProps) => {
  return (
    <>
      {React.Children.map(children, (child) =>
        child ? <Reveal>{child}</Reveal> : null
      )}
    </>
  );
};
