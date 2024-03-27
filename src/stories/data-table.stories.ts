import { DataTable } from "@/components/data-table/data-table"

import type { Meta, StoryObj } from "@storybook/react"

//Mock data

const columns = [
  {
    accessorKey: "name",
    header: "Nazwa",
  },
  {
    accessorKey: "count",
    header: "Nazwa tagu",
  },
]

const data = [
  { name: "javascript", count: 312312 },
  { name: "react", count: 4562321 },
  { name: "python", count: 12 },
]

const meta = {
  title: "Data Table",
  component: DataTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    columns: columns,
    data: data,
    sorting: [{ desc: true, id: "count" }],
    pagination: {
      pageIndex: 0,
      pageSize: 10,
    },
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const Empty: Story = {
  args: { data: [] },
}
