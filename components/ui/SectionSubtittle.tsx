import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionSubtittle = ({ children }: Props) => {
  return <p className="mt-2 text-sm text-muted">{children}</p>;
};

export default SectionSubtittle;
