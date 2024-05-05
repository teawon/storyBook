import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TagButton from "../components/TagButton";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "TagButton의 내용" },
    isChecked: { control: "boolean", description: "TagButton의 체크 여부" },
    onClick: { action: "clicked", description: "TagButton 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "button",
    isChecked: false,
  },
};
