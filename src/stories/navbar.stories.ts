import { Navbar } from "@/components/navbar/navbar"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Navbar",
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
