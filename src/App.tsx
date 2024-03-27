import { columns } from "./components/data-table/utils/columns"
import { DataTable } from "./components/data-table/data-table"
import { Error } from "./components/error"
import { Loading } from "./components/loading"

import { useGetTags } from "./services/use-get-tags"
import { useState } from "react"
import { PaginationState, SortingState } from "@tanstack/react-table"

function App() {
  const [sorting, setSorting] = useState<SortingState>([
    {
      desc: true,
      id: "count",
    },
  ])

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const { data: tags, isLoading, isError } = useGetTags(sorting, pagination)

  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        data={tags.items}
        sorting={sorting}
        setSorting={setSorting}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  )
}

export default App
