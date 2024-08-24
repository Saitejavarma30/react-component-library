export type AccordionProps = {
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
} & (
  | {
      content: string;
      children?: never;
    }
  | {
      content?: never;
      children: React.ReactNode;
    }
);
