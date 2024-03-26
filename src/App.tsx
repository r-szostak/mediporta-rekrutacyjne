import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { Error } from "./components/error"
import { Loading } from "./components/loading"

import { useTags } from "./hooks/use-tags"

function App() {
  const { data: tags, isLoading, isError } = useTags()

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
