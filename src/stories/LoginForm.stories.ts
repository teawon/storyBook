import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within, expect } from "@storybook/test";

import LoginForm from "../components/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Forms/LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByTestId("email");
    await expect(emailInput).toBeInTheDocument();

    const passwordInput = canvas.getByTestId("password");
    await expect(passwordInput).toBeInTheDocument();

    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(loginButton).toBeDisabled();
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 한 줄로 치는 것보다 상호작용 대상 / 행위를 분리하는게 좋다. 자주쓰이기 때문
    const emailInput = canvas.getByTestId("email");
    await userEvent.type(emailInput, "test@email.com");

    const passwordInput = canvas.getByTestId("password");
    await userEvent.type(passwordInput, "a-random-password");

    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(loginButton).toBeEnabled();
  },
};
