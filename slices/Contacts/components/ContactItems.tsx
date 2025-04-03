import { ReactNode } from "react";

const ContactItems = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center gap-3 self-stretch">{children}</div>;
};

export default ContactItems;
