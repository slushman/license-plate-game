import * as React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  layout?: "default" | "tight";
  onClick: () => void;
}

const IconButton = ({
  icon,
  label,
  layout = "default",
  onClick,
}: IconButtonProps) => {
  const classes = layout === "default" ? "px-5" : "px-1";

  return (
    <button
      className={`text-3xl flex justify-center items-center ${classes}`}
      onClick={onClick}
    >
      {icon}
      <span className="hidden">{label}</span>
    </button>
  );
};

export default React.memo(IconButton);
