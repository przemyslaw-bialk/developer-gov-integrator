import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionHeader = ({ children, className }: Props) => {
  return <h2 className={`text-2xl ${className}`}>{children}</h2>;
};

export default SectionHeader;
