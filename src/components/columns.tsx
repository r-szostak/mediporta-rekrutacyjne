import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tag = {
  collectives: [] | null
  count: number
  has_synonyms: boolean
  is_moderator_only: boolean
  is_required: boolean
  name: string
  user_id: number | null
}

export const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: "name",
    header: "Nazwa",
  },
  {
    accessorKey: "count",
    header: "Liczba postów",
  },
]
