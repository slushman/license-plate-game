import * as React from "react";

import IconButton from "../IconButton";
import { CloseIcon } from "../icons";

interface ModalProps {
  children: React.ReactElement;
  onClose: () => void;
  show: boolean;
  title?: string;
}

const Modal = ({ children, onClose, show, title = "" }: ModalProps) => {
  const titleId = React.useId();
  const dialogRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!show) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement as HTMLElement | null;

    const focusables = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusables[0]?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      previousFocus?.focus?.();
    };
  }, [show, onClose]);

  return (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className={`
    absolute
    bg-darkblue
    duration-200
    ease-in
    flex
    flex-col
    hover:duration-75
    inset-0
    items-center
    justify-center
    ${show ? "opacity-1" : "opacity-0"}
    overflow-hidden
    ${show ? "pointer-events-auto" : "pointer-events-none"}
    text-white
    transition-opacity
    z-50
  `}
      inert={!show}
      ref={dialogRef}
      role="dialog"
    >
      <div className="flex flex-col text-left p-8 overflow-auto max-w-prose h-full w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="m-0" id={titleId}>{title}</h1>
          <IconButton icon={<CloseIcon />} label="Close" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default React.memo(Modal);
