import * as React from "react";

import IconButton from "../IconButton";

interface ModalProps {
  children: React.ReactElement;
  onClose: () => void;
  show: boolean;
  title?: string;
}

const Modal = ({ children, onClose, show, title = "" }: ModalProps) => (
  <div
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
  >
    <div className="flex flex-col text-left p-8 overflow-auto max-w-prose h-full w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="m-0">{title}</h1>
        <IconButton icon="gg-close" label="Close" onClick={onClose} />
      </div>
      {children}
    </div>
  </div>
);

export default React.memo(Modal);
