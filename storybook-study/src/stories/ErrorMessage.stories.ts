import type { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from "../components/ErrorMessage";

const meta = {
  title: "Text/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "ErrorMessage의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO - 그냥 Typography 컴포넌트로 대체할 수 있지 않을까? 의미가 명확하긴 하지만 너무 많은게 파생될 것 같다는 생각이 듦
export const Default: Story = {
  args: {
    children: "에러 메세지",
  },
};
