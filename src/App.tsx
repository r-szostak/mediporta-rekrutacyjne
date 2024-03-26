import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { Navbar } from "./components/navbar"
import { useTags } from "./hooks/use-tags"

function App() {
  const { data: tags, isLoading, isError } = useTags()

  console.log(tags)

  if (isLoading) {
    //TODO
    return <div>isLoading</div>
  }
  return (
    <div className="w-full">
      <Navbar />
      <DataTable columns={columns} data={tags.items} />
    </div>
  )
}

export default App
