import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionHeader = ({ children, className }: Props) => {
  return (
    <h2
      className={`font-heading text-4xl font-semibold text-text"> ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
