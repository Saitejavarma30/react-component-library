import { styled } from "styled-components";

export const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const AccordionHeader = styled.div<{ isOpen: boolean }>`
  background-color: ${(props) => (props.isOpen ? "#007BFF" : "#f1f1f1")};
  color: ${(props) => (props.isOpen ? "#fff" : "#000")};
  cursor: pointer;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: ${(props) => (props.isOpen ? "10px" : "0 10px")};
  background-color: #f9f9f9;
`;
