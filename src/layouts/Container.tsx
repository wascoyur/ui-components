import { ReactNode } from "react";
import "./container.css";

export const Container = ({ children }: { children: ReactNode }) => {
  return <span className="container">{children}</span>;
};
