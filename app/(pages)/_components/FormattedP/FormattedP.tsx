import React from 'react';

export type FormattedPProps = {
  text: string | undefined;
};

const FormattedP: React.FC<FormattedPProps> = ({ text = '' }) => {
  return (
    <p>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default FormattedP;
