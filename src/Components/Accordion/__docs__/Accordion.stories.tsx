import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example";
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Accordion",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    title: "Example one of Accordion",
    isOpen: true,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloremque",
    onClick: () => console.log("Accordion"),
  },
};
export const Secondary: Story = {
  args: {
    title: "Example one of Accordion",
    isOpen: false,
    children: (
      <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloremque
      </>
    ),
    onClick: () => console.log("Button"),
  },
};
