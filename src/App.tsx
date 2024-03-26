import { Navbar } from "./components/navbar"
import { useTags } from "./hooks/use-tags"

function App() {
  const { data: tags, isLoading, isError } = useTags()

  console.log(tags.items)
  return (
    <div className="w-full">
      <Navbar />
    </div>
  )
}

export default App
