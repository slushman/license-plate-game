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
  React.useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setAlertText(''), 2000);
    return () => clearTimeout(timer);
  }, [message, setAlertText]);

  const hasMessage = message !== '';
  const isError = type === AlertType.Error;

  return (
    <div
      aria-live={isError ? 'assertive' : 'polite'}
      className={`
        absolute
        ${isError ? 'bg-red-500' : 'bg-white'}
        border-2
        border-solid
        duration-200
        ease-in-out
        ${hasMessage ? 'opacity-1' : 'opacity-0'}
        p-3
        rounded
        text-center
        ${isError ? 'text-white' : 'text-darkblue'}
        text-xl
        top-20
        transition-opacity
        w-1/2
        z-50
      `}
      role={isError ? 'alert' : 'status'}
    >{message}</div>
  );
};

export default React.memo(Alert);
