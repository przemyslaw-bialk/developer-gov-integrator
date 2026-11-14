import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/* TO USE THIS COMPONENT ALWAYS ADD 'GROUP' TAILWIND CLASS TO THE PARENT COMPONENT */

const HoverPopup = ({ children }: Props) => {
  return (
    <div className="absolute -top-5 -right-30 bg-secondary text-text max-w-62 text-xs tracking-widest italic rounded-md px-2 py-0.5 hidden group-hover:block shadow-md z-10">
      {children}
    </div>
  );
};

export default HoverPopup;
