import * as React from 'react';

interface ButtonProps {
  label: string | React.ReactNode;
  onClick: () => void;
}

const Button = ({
  label,
  onClick,
}: ButtonProps) => {

  return (
    <button
      className="bg-darkblue border p-2 rounded text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default React.memo(Button);
