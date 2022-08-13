import * as React from 'react';

export enum AlertType {
  Error,
  Default,
}

interface AlertProps {
  message: string;
  setAlertText: (newAlertText: string) => void;
  type?: AlertType,
}

const Alert = ({
  message,
  setAlertText,
  type = AlertType.Default,
}: AlertProps) => {
  setTimeout(() => {
    setAlertText('')
  }, 2000);

  const hasMessage = message !== '';

  return (
    <div
      className={`
        absolute
        ${type === AlertType.Error ? 'bg-red-500' : 'bg-white'}
        border-2
        border-solid
        duration-200
        ease-in-out
        ${hasMessage ? 'opacity-1' : 'opacity-0'}
        p-3
        rounded
        text-center
        ${type === AlertType.Error ? 'text-white' : 'text-darkblue'}
        text-xl
        top-20
        transition-opacity
        w-1/2
        z-50
      `}
    >{message}</div>
  );
};

export default React.memo(Alert);
