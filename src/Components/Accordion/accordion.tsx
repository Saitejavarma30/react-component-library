import React from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
} from "./styles";
import { AccordionProps } from "./types";

const Accordian: React.FC<AccordionProps> = (props) => {
  const { title, isOpen, onClick, content, children } = props;
  const [open, setOpen] = React.useState(isOpen || false);
  const handleToggle = () => {
    setOpen(!open);
    if (onClick) onClick();
  };
  return (
    <AccordionContainer>
      <AccordionHeader isOpen={open} onClick={handleToggle}>
        {title}
        <span>{open ? "-" : "+"}</span>
      </AccordionHeader>
      <AccordionContent isOpen={open}>
        {content ? content : children}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordian;
