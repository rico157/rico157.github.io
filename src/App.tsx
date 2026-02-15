import { useState } from "react"
import { DevPage } from "@/components/dev-page"

type Page = "home" | "dev" | "apps"

export function App() {
  const [page, setPage] = useState<Page>("dev")

  const navigateHome = () => {
    setPage("home")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (page === "dev") {
    return <DevPage onNavigateHome={navigateHome} />
  }

  // Placeholder for homepage — will be built later
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Home</h1>
        <button
          onClick={() => setPage("dev")}
          className="text-primary underline"
        >
          Go to DEV page
        </button>
      </div>
    </div>
  )
}

export default App
