import React, { FC } from "react";
import { AccordionProps } from "../types";
import Accordion from "../accordion";

const Example: FC<AccordionProps> = ({
  title,
  isOpen,
  onClick,
  content,
  children,
}) => {
  if (children && !content)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Accordion
          title={title}
          isOpen={isOpen}
          onClick={onClick}
          children={children}
        />
      </div>
    );
  else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Accordion
          title={title}
          isOpen={isOpen}
          onClick={onClick}
          content={content ? content : ""}
        />
      </div>
    );
  }
};

export default Example;
