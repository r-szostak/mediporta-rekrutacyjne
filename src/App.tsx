import { columns } from "./components/data-table/utils/columns"
import { DataTable } from "./components/data-table/data-table"
import { Error } from "./components/error"
import { Loading } from "./components/loading"

import { useGetTags } from "./services/use-get-tags"

function App() {
  const { data: tags, isLoading, isError } = useGetTags()

  console.log(tags)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <Error />
  }
  return (
    <div className="w-full">
      <DataTable columns={columns} data={tags.items} />
    </div>
  )
}

export default App
